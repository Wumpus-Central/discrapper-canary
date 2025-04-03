var n = r(8235),
    i = r(392919),
    o = r(304611),
    a = RegExp('\r\n', 'g'),
    u = {
        'text/rtf': 1,
        'text/html': 1
    };
function s(t) {
    if ('file' == t.kind) return t.getAsFile();
}
t.exports = (function () {
    function t(t) {
        (this.data = t), (this.types = t.types ? i(t.types) : []);
    }
    var e = t.prototype;
    return (
        (e.isRichText = function () {
            return (
                !!(this.getHTML() && this.getText()) ||
                (!this.isImage() &&
                    this.types.some(function (t) {
                        return u[t];
                    }))
            );
        }),
        (e.getText = function () {
            var t;
            return this.data.getData && (this.types.length ? -1 != this.types.indexOf('text/plain') && (t = this.data.getData('text/plain')) : (t = this.data.getData('Text'))), t ? t.replace(a, '\n') : null;
        }),
        (e.getHTML = function () {
            if (this.data.getData) {
                if (!this.types.length) return this.data.getData('Text');
                else if (-1 != this.types.indexOf('text/html')) return this.data.getData('text/html');
            }
        }),
        (e.isLink = function () {
            return this.types.some(function (t) {
                return -1 != t.indexOf('Url') || -1 != t.indexOf('text/uri-list') || t.indexOf('text/x-moz-url');
            });
        }),
        (e.getLink = function () {
            return this.data.getData ? (-1 != this.types.indexOf('text/x-moz-url') ? this.data.getData('text/x-moz-url').split('\n')[0] : -1 != this.types.indexOf('text/uri-list') ? this.data.getData('text/uri-list') : this.data.getData('url')) : null;
        }),
        (e.isImage = function () {
            if (
                this.types.some(function (t) {
                    return -1 != t.indexOf('application/x-moz-file');
                })
            )
                return !0;
            for (var t = this.getFiles(), e = 0; e < t.length; e++) {
                var r = t[e].type;
                if (!n.isImage(r)) return !1;
            }
            return !0;
        }),
        (e.getCount = function () {
            return this.data.hasOwnProperty('items') ? this.data.items.length : this.data.hasOwnProperty('mozItemCount') ? this.data.mozItemCount : this.data.files ? this.data.files.length : null;
        }),
        (e.getFiles = function () {
            return this.data.items ? Array.prototype.slice.call(this.data.items).map(s).filter(o.thatReturnsArgument) : this.data.files ? Array.prototype.slice.call(this.data.files) : [];
        }),
        (e.hasFiles = function () {
            return this.getFiles().length > 0;
        }),
        t
    );
})();
