var n = l(661095),
    a = l(512976),
    i = l(258576),
    r = l(792996);
function s(e) {
    return e.length > 2 ? r.intl.formatToPlainString(i.default.GCBZ4y, { count: e.length }) : e.join(", ");
}
l.d(
    t,
    {},
    {
        OF: function (e) {
            let t = e?.trim() ?? "";
            return "" === t
                ? r.intl.string(i.default.AP0svk)
                : r.intl.formatToPlainString(i.default.x1ppJb, { name: t });
        },
        eX: s,
        hI: function (e, t) {
            return r.intl.formatToPlainString(i.default.fsStRX, { label: e, error: t });
        },
        q9: function (e, t) {
            if ("number" !== e.type || void 0 === t) return null;
            let l = (0, n.Ui)(e, t);
            return null === l
                ? null
                : "number" != typeof l
                  ? { kind: "invalid" }
                  : null != e.min && l < e.min
                    ? { kind: "min", min: e.min }
                    : null != e.max && l > e.max
                      ? { kind: "max", max: e.max }
                      : null;
        },
        ue: function (e, t, l) {
            return e.flatMap((e) => {
                let i = (0, a.Fk)(e, t);
                if (null == i) return [];
                if ("secret" === i.kind) {
                    let t = i.filled || "" !== (l.secrets[e] ?? "").trim();
                    return [{ key: e, label: i.def?.label ?? e, filled: t, needed: !t }];
                }
                let { def: r } = i,
                    s = l.values[(0, n.$c)(r, l.serverId)],
                    u = void 0 === s ? void 0 : (0, n.Ui)(r, s),
                    o = void 0 === u ? (0, n.De)(t, r) : u,
                    d = null != o && "" !== o;
                return [{ key: e, label: r.label, filled: d, needed: (0, a.ZX)(i) && !d }];
            });
        },
        xM: function (e) {
            let t = e.filter((e) => e.needed);
            return 0 === t.length
                ? e.length > 0 && e.every((e) => e.filled)
                    ? r.intl.string(i.default["7dCuuy"])
                    : null
                : e.some((e) => e.filled)
                  ? r.intl.formatToPlainString(i.default.LqdG9C, { items: s(t.map((e) => e.label)) })
                  : e.length > 1
                    ? r.intl.string(i.default.t5po6q)
                    : null;
        },
    },
);
