var i = n(782973);
function r(e, t) {
    return null == e || "all" === e.mode
        ? "match"
        : "pending" === e.mode
          ? "pending"
          : null == t.id || "" === t.id
            ? "unrecognized"
            : e.application_ids.includes(t.id)
              ? "match"
              : "no_match";
}
n.d(
    t,
    {},
    {
        b8: function (e) {
            let { pinned: t, targeting: n, game: i, override: l } = e;
            return null != l ? "show" === l : !!t || (null != i && "match" === r(n, i));
        },
        fG: function (e) {
            let t = !0 === e?.schema.some((e) => e.key === i.B && "game" === e.type) ? e?.values[i.B] : void 0;
            return Array.isArray(t) && t.length > 0 ? { mode: "specific", application_ids: t } : null;
        },
        u8: r,
        xT: function (e) {
            let { targeting: t, game: n, override: i } = e;
            return null != n && "hide" !== i && ("show" === i || "match" === r(t, n));
        },
    },
);
