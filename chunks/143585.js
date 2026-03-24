Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.decodeXMLStrict =
        e.decodeHTML5Strict =
        e.decodeHTML4Strict =
        e.decodeHTML5 =
        e.decodeHTML4 =
        e.decodeHTMLStrict =
        e.decodeHTML =
        e.decodeXML =
        e.encodeHTML5 =
        e.encodeHTML4 =
        e.escapeUTF8 =
        e.escape =
        e.encodeNonAsciiHTML =
        e.encodeHTML =
        e.encodeXML =
        e.encode =
        e.decodeStrict =
        e.decode =
            void 0);
var o = t(770883),
    a = t(634303);
(e.decode = function (r, e) {
    return (!e || e <= 0 ? o.decodeXML : o.decodeHTML)(r);
}),
    (e.decodeStrict = function (r, e) {
        return (!e || e <= 0 ? o.decodeXML : o.decodeHTMLStrict)(r);
    }),
    (e.encode = function (r, e) {
        return (!e || e <= 0 ? a.encodeXML : a.encodeHTML)(r);
    });
var n = t(634303);
Object.defineProperty(e, "encodeXML", {
    enumerable: !0,
    get: function () {
        return n.encodeXML;
    },
}),
    Object.defineProperty(e, "encodeHTML", {
        enumerable: !0,
        get: function () {
            return n.encodeHTML;
        },
    }),
    Object.defineProperty(e, "encodeNonAsciiHTML", {
        enumerable: !0,
        get: function () {
            return n.encodeNonAsciiHTML;
        },
    }),
    Object.defineProperty(e, "escape", {
        enumerable: !0,
        get: function () {
            return n.escape;
        },
    }),
    Object.defineProperty(e, "escapeUTF8", {
        enumerable: !0,
        get: function () {
            return n.escapeUTF8;
        },
    }),
    Object.defineProperty(e, "encodeHTML4", {
        enumerable: !0,
        get: function () {
            return n.encodeHTML;
        },
    }),
    Object.defineProperty(e, "encodeHTML5", {
        enumerable: !0,
        get: function () {
            return n.encodeHTML;
        },
    });
var c = t(770883);
Object.defineProperty(e, "decodeXML", {
    enumerable: !0,
    get: function () {
        return c.decodeXML;
    },
}),
    Object.defineProperty(e, "decodeHTML", {
        enumerable: !0,
        get: function () {
            return c.decodeHTML;
        },
    }),
    Object.defineProperty(e, "decodeHTMLStrict", {
        enumerable: !0,
        get: function () {
            return c.decodeHTMLStrict;
        },
    }),
    Object.defineProperty(e, "decodeHTML4", {
        enumerable: !0,
        get: function () {
            return c.decodeHTML;
        },
    }),
    Object.defineProperty(e, "decodeHTML5", {
        enumerable: !0,
        get: function () {
            return c.decodeHTML;
        },
    }),
    Object.defineProperty(e, "decodeHTML4Strict", {
        enumerable: !0,
        get: function () {
            return c.decodeHTMLStrict;
        },
    }),
    Object.defineProperty(e, "decodeHTML5Strict", {
        enumerable: !0,
        get: function () {
            return c.decodeHTMLStrict;
        },
    }),
    Object.defineProperty(e, "decodeXMLStrict", {
        enumerable: !0,
        get: function () {
            return c.decodeXML;
        },
    });
