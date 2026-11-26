var n = l(661095),
    a = l(512976),
    r = l(191850),
    i = l(792996);
function s(e) {
    return e.length > 2 ? i.intl.formatToPlainString(r.default.GCBZ4y, { count: e.length }) : e.join(", ");
}
l.d(
    t,
    {},
    {
        OF: function (e) {
            let t = e?.trim() ?? "";
            return "" === t
                ? i.intl.string(r.default.AP0svk)
                : i.intl.formatToPlainString(r.default.x1ppJb, { name: t });
        },
        eX: s,
        hI: function (e, t) {
            return i.intl.formatToPlainString(r.default.fsStRX, { label: e, error: t });
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
                let r = (0, a.Fk)(e, t);
                if (null == r) return [];
                if ("secret" === r.kind) {
                    let t = r.filled || "" !== (l.secrets[e] ?? "").trim();
                    return [{ key: e, label: r.def?.label ?? e, filled: t, needed: !t }];
                }
                let { def: i } = r,
                    s = l.values[(0, n.$c)(i, l.serverId)],
                    u = void 0 === s ? void 0 : (0, n.Ui)(i, s),
                    o = void 0 === u ? (0, n.De)(t, i) : u,
                    d = null != o && "" !== o;
                return [{ key: e, label: i.label, filled: d, needed: (0, a.ZX)(r) && !d }];
            });
        },
        xM: function (e) {
            let t = e.filter((e) => e.needed);
            return 0 === t.length
                ? e.length > 0 && e.every((e) => e.filled)
                    ? i.intl.string(r.default["7dCuuy"])
                    : null
                : e.some((e) => e.filled)
                  ? i.intl.formatToPlainString(r.default.LqdG9C, { items: s(t.map((e) => e.label)) })
                  : e.length > 1
                    ? i.intl.string(r.default.t5po6q)
                    : null;
        },
    },
);
