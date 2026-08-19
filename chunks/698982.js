"use strict";
function r(e, t, r) {
    (this.locales = e), (this.formats = t), (this.pluralFn = r);
}
function n(e) {
    this.id = e;
}
function o(e, t, r, n, o) {
    (this.id = e), (this.useOrdinal = t), (this.offset = r), (this.options = n), (this.pluralFn = o);
}
function i(e, t, r, n) {
    (this.id = e), (this.offset = t), (this.numberFormat = r), (this.string = n);
}
function a(e, t) {
    (this.id = e), (this.options = t);
}
(t.default = r),
    (r.prototype.compile = function (e) {
        return (
            (this.pluralStack = []),
            (this.currentPlural = null),
            (this.pluralNumberFormat = null),
            this.compileMessage(e)
        );
    }),
    (r.prototype.compileMessage = function (e) {
        if (!(e && "messageFormatPattern" === e.type))
            throw Error('Message AST is not of type: "messageFormatPattern"');
        var t,
            r,
            n,
            o = e.elements,
            i = [];
        for (t = 0, r = o.length; t < r; t += 1)
            switch ((n = o[t]).type) {
                case "messageTextElement":
                    i.push(this.compileMessageText(n));
                    break;
                case "argumentElement":
                    i.push(this.compileArgument(n));
                    break;
                default:
                    throw Error("Message element does not have a valid type");
            }
        return i;
    }),
    (r.prototype.compileMessageText = function (e) {
        return this.currentPlural && /(^|[^\\])#/g.test(e.value)
            ? (this.pluralNumberFormat || (this.pluralNumberFormat = new Intl.NumberFormat(this.locales)),
              new i(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, e.value))
            : e.value.replace(/\\#/g, "#");
    }),
    (r.prototype.compileArgument = function (e) {
        var t = e.format;
        if (!t) return new n(e.id);
        var r,
            i = this.formats,
            s = this.locales,
            l = this.pluralFn;
        switch (t.type) {
            case "numberFormat":
                return (r = i.number[t.style]), { id: e.id, format: new Intl.NumberFormat(s, r).format };
            case "dateFormat":
                return (r = i.date[t.style]), { id: e.id, format: new Intl.DateTimeFormat(s, r).format };
            case "timeFormat":
                return (r = i.time[t.style]), { id: e.id, format: new Intl.DateTimeFormat(s, r).format };
            case "pluralFormat":
                return (r = this.compileOptions(e)), new o(e.id, t.ordinal, t.offset, r, l);
            case "selectFormat":
                return (r = this.compileOptions(e)), new a(e.id, r);
            default:
                throw Error("Message element does not have a valid format type");
        }
    }),
    (r.prototype.compileOptions = function (e) {
        var t,
            r,
            n,
            o = e.format,
            i = o.options,
            a = {};
        for (
            this.pluralStack.push(this.currentPlural),
                this.currentPlural = "pluralFormat" === o.type ? e : null,
                t = 0,
                r = i.length;
            t < r;
            t += 1
        )
            a[(n = i[t]).selector] = this.compileMessage(n.value);
        return (this.currentPlural = this.pluralStack.pop()), a;
    }),
    (n.prototype.format = function (e) {
        return e ? ("string" == typeof e ? e : String(e)) : "";
    }),
    (o.prototype.getOption = function (e) {
        var t = this.options;
        return t["=" + e] || t[this.pluralFn(e - this.offset, this.useOrdinal)] || t.other;
    }),
    (i.prototype.format = function (e) {
        var t = this.numberFormat.format(e - this.offset);
        return this.string.replace(/(^|[^\\])#/g, "$1" + t).replace(/\\#/g, "#");
    }),
    (a.prototype.getOption = function (e) {
        var t = this.options;
        return t[e] || t.other;
    });
