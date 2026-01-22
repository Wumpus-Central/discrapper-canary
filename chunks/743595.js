var r = n(924905),
    i = n(743032),
    a = n(675427),
    s = RegExp("\r\n", "g"),
    o = "\n",
    l = {
        "text/rtf": 1,
        "text/html": 1,
    };

function c(e) {
    if ("file" == e.kind) return e.getAsFile();
}
e.exports = (function () {
    function e(e) {
        (this.data = e), (this.types = e.types ? i(e.types) : []);
    }
    var t = e.prototype;
    return (
        (t.isRichText = function () {
            return (
                !!(this.getHTML() && this.getText()) ||
                (!this.isImage() &&
                    this.types.some(function (e) {
                        return l[e];
                    }))
            );
        }),
        (t.getText = function () {
            var e;
            return (
                this.data.getData &&
                    (this.types.length
                        ? -1 != this.types.indexOf("text/plain") && (e = this.data.getData("text/plain"))
                        : (e = this.data.getData("Text"))),
                e ? e.replace(s, o) : null
            );
        }),
        (t.getHTML = function () {
            if (this.data.getData) {
                if (!this.types.length) return this.data.getData("Text");
                else if (-1 != this.types.indexOf("text/html")) return this.data.getData("text/html");
            }
        }),
        (t.isLink = function () {
            return this.types.some(function (e) {
                return -1 != e.indexOf("Url") || -1 != e.indexOf("text/uri-list") || e.indexOf("text/x-moz-url");
            });
        }),
        (t.getLink = function () {
            return this.data.getData
                ? -1 != this.types.indexOf("text/x-moz-url")
                    ? this.data.getData("text/x-moz-url").split("\n")[0]
                    : -1 != this.types.indexOf("text/uri-list")
                      ? this.data.getData("text/uri-list")
                      : this.data.getData("url")
                : null;
        }),
        (t.isImage = function () {
            if (
                this.types.some(function (e) {
                    return -1 != e.indexOf("application/x-moz-file");
                })
            )
                return !0;
            for (var e = this.getFiles(), t = 0; t < e.length; t++) {
                var n = e[t].type;
                if (!r.isImage(n)) return !1;
            }
            return !0;
        }),
        (t.getCount = function () {
            return this.data.hasOwnProperty("items")
                ? this.data.items.length
                : this.data.hasOwnProperty("mozItemCount")
                  ? this.data.mozItemCount
                  : this.data.files
                    ? this.data.files.length
                    : null;
        }),
        (t.getFiles = function () {
            return this.data.items
                ? Array.prototype.slice.call(this.data.items).map(c).filter(a.thatReturnsArgument)
                : this.data.files
                  ? Array.prototype.slice.call(this.data.files)
                  : [];
        }),
        (t.hasFiles = function () {
            return this.getFiles().length > 0;
        }),
        e
    );
})();
