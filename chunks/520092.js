"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.InternalIntlMessage = void 0);
let n = r(118300);
t.InternalIntlMessage = class {
    constructor(e, t) {
        (this.locale = t), (this.ast = (0, n.isCompressedAst)(e) ? e : (0, n.compressFormatJsToAst)(e));
    }
    reserialize() {
        if ("string" == typeof this.ast) return this.ast;
        let e = { value: "" };
        return (
            (function e(t, r) {
                for (let i of t) {
                    if ("string" == typeof i) {
                        r.value += i;
                        continue;
                    }
                    switch (i[0]) {
                        case n.FormatJsNodeType.Argument:
                            r.value += "{" + i[1] + "}";
                            break;
                        case n.FormatJsNodeType.Date:
                            (r.value += "{" + i[1] + ", date"),
                                null != i[2] && (r.value += ", " + i[2]),
                                (r.value += "}");
                            break;
                        case n.FormatJsNodeType.Time:
                            (r.value += "{" + i[1] + ", time"),
                                null != i[2] && (r.value += ", " + i[2]),
                                (r.value += "}");
                            break;
                        case n.FormatJsNodeType.Number:
                            (r.value += "{" + i[1] + ", number"),
                                null != i[2] && (r.value += ", " + i[2]),
                                (r.value += "}");
                            break;
                        case n.FormatJsNodeType.Plural: {
                            let t = "ordinal" == i[4] ? "selectordinal" : "plural";
                            for (let [n, o] of ((r.value += "{" + i[1] + ", " + t + ","),
                            i[3] && (r.value += " offset:" + i[3]),
                            Object.entries(i[2])))
                                (r.value += " " + n + " {"), e(o, r), (r.value += "}");
                            r.value += "}";
                            break;
                        }
                        case n.FormatJsNodeType.Pound:
                            r.value += "#";
                            break;
                        case n.FormatJsNodeType.Select:
                            for (let [t, n] of ((r.value += "{" + i[1] + ", select,"), Object.entries(i[2])))
                                (r.value += " " + t + " {"), e(n, r), (r.value += "}");
                            r.value += "}";
                            break;
                        case n.FormatJsNodeType.Tag:
                            !(function (t, r) {
                                switch (t[1]) {
                                    case "$b":
                                        (r.value += "**"), e(t[2], r), (r.value += "**");
                                        break;
                                    case "$i":
                                        (r.value += "*"), e(t[2], r), (r.value += "*");
                                        break;
                                    case "$code":
                                        (r.value += "`"), e(t[2], r), (r.value += "`");
                                        break;
                                    case "$p":
                                        e(t[2], r), (r.value += "\n\n");
                                        break;
                                    case "$link":
                                        let n = t[2],
                                            i = t[3];
                                        (r.value += "["),
                                            e(n, r),
                                            (r.value += "]("),
                                            null != i && e(i, r),
                                            (r.value += ")");
                                        break;
                                    default:
                                        (r.value += "$["), e(t[2], r), (r.value += "](" + t[1] + ")");
                                }
                            })(i, r);
                    }
                }
            })(this.ast, e),
            e.value
        );
    }
};
