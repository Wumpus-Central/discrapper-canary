n.d(
    t,
    {},
    {
        Q0: /\x1B\[(\d+(?:[:;]\d+)*)m/g,
        dq: function (e) {
            return "home" === e || "browse" === e || "customize" === e || "guide" === e || "linked-roles" === e;
        },
        tj: function (e, t, n) {
            return "string" == typeof e.content || void 0 === e.content ? e.content : t(e.content, n);
        },
    },
);
