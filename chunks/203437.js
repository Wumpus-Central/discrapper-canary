t.d(n, { Z: () => N }), t(388685);
var a = t(951288),
    l = t(647438),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    s = t(481060),
    u = t(565138),
    c = t(357156),
    d = t(430824),
    f = t(496675),
    m = t(771845),
    g = t(594174),
    h = t(267642),
    p = t(709054),
    y = t(208049),
    b = t(763296),
    v = t(710111),
    x = t(981631),
    j = t(388032),
    w = t(697847);
function _(e) {
    let { availableSlots: n, className: t } = e;
    return (0, a.jsxs)(s.Text, {
        className: r()(w.suffixNode, t),
        variant: "text-sm/medium",
        color: "text-primary",
        children: [
            (0, a.jsx)(s.gj8, {
                size: "md",
                color: "currentColor",
                className: w.speakerIcon,
            }),
            j.intl.format(j.t["8Dyg1N"], { slots: n }),
        ],
    });
}
function N(e) {
    let { value: n, className: t, onChange: i } = e,
        N = (0, o.cj)([m.ZP, f.Z, g.default, d.Z], () => {
            let e = {};
            for (let n of m.ZP.getFlattenedGuildIds()) {
                let t = d.Z.getGuild(n);
                null != t && (0, c.Gw)(t, f.Z, g.default).canCreateExpressions && (e[t.id] = t);
            }
            return e;
        }),
        C = (0, o.cj)([b.Z], () => {
            let e = {};
            for (let [t, a] of p.default.entries(N)) {
                var n;
                let l = (0, h.yw)(a, null != (n = b.Z.getSoundsForGuild(t)) ? n : v.Hy, a.premiumTier);
                e[t] = l;
            }
            return e;
        }, [N]);
    l.useEffect(() => {
        (0, y.w)();
    }, []);
    let S = l.useMemo(
            () =>
                Object.values(N).map((e) => {
                    let { name: n, id: t } = e;
                    return {
                        label: n,
                        value: t,
                        disabled: C[t] <= 0,
                    };
                }),
            [N, C],
        ),
        O = l.useCallback(
            (e) =>
                null == e || "" === e.value
                    ? null
                    : (0, a.jsx)(u.Z, {
                          className: r()(w.guildSelectOptionIcon, { [w.disabledOption]: e.disabled }),
                          guild: N[e.value],
                          size: u.Z.Sizes.SMOL,
                          active: !0,
                      }),
            [N],
        ),
        E = l.useCallback(
            (e) => {
                let n = null == e ? void 0 : e.value;
                return null == n || "" === n
                    ? null
                    : (0, a.jsx)(_, {
                          className: r()({ [w.disabledOption]: null == e ? void 0 : e.disabled }),
                          availableSlots: C[n],
                      });
            },
            [C],
        ),
        P = l.useCallback(
            (e) =>
                (0, a.jsx)("div", {
                    className: r()({ [w.disabledOption]: e.disabled }),
                    children: e.label,
                }),
            [],
        ),
        I = l.useCallback(
            (e) => {
                C[e] <= 0 || i(e);
            },
            [C, i],
        ),
        Z = (() => {
            let e = C[null != n ? n : x.lds];
            return null == e || e > 0 ? n : void 0;
        })();
    return (0, a.jsx)(s.VcW, {
        className: t,
        onChange: I,
        value: Z,
        multi: !1,
        options: S,
        renderOptionPrefix: O,
        renderOptionSuffix: E,
        renderOptionLabel: P,
        placeholder: 0 === S.length ? j.intl.string(j.t.O3i2gY) : j.intl.string(j.t.CunCMD),
    });
}
