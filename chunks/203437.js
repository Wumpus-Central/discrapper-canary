t.d(n, { Z: () => C }), t(47120);
var l = t(200651),
    a = t(192379),
    i = t(120356),
    s = t.n(i),
    r = t(442837),
    o = t(481060),
    u = t(565138),
    d = t(357156),
    c = t(430824),
    f = t(496675),
    m = t(771845),
    h = t(594174),
    g = t(267642),
    p = t(709054),
    x = t(208049),
    v = t(763296),
    y = t(710111),
    b = t(981631),
    N = t(388032),
    j = t(693793);
function w(e) {
    let { availableSlots: n, className: t } = e;
    return (0, l.jsxs)(o.Text, {
        className: s()(j.suffixNode, t),
        variant: 'text-sm/medium',
        color: 'text-primary',
        children: [
            (0, l.jsx)(o.gj8, {
                size: 'md',
                color: 'currentColor',
                className: j.speakerIcon
            }),
            N.intl.format(N.t['8Dyg1N'], { slots: n })
        ]
    });
}
function C(e) {
    let { value: n, className: t, onChange: i } = e,
        C = (0, r.cj)([m.ZP, f.Z, h.default, c.Z], () => {
            let e = {};
            for (let n of m.ZP.getFlattenedGuildIds()) {
                let t = c.Z.getGuild(n);
                null != t && (0, d.Gw)(t, f.Z, h.default).canCreateExpressions && (e[t.id] = t);
            }
            return e;
        }),
        S = (0, r.cj)(
            [v.Z],
            () => {
                let e = {};
                for (let [t, l] of p.default.entries(C)) {
                    var n;
                    let a = (0, g.yw)(l, null !== (n = v.Z.getSoundsForGuild(t)) && void 0 !== n ? n : y.Hy, l.premiumTier);
                    e[t] = a;
                }
                return e;
            },
            [C]
        );
    a.useEffect(() => {
        (0, x.w)();
    }, []);
    let Z = a.useMemo(
            () =>
                Object.values(C).map((e) => {
                    let { name: n, id: t } = e;
                    return {
                        label: n,
                        value: t,
                        disabled: S[t] <= 0
                    };
                }),
            [C, S]
        ),
        M = a.useCallback(
            (e) =>
                null == e || '' === e.value
                    ? null
                    : (0, l.jsx)(u.Z, {
                          className: s()(j.guildSelectOptionIcon, { [j.disabledOption]: e.disabled }),
                          guild: C[e.value],
                          size: u.Z.Sizes.SMOL,
                          active: !0
                      }),
            [C]
        ),
        k = a.useCallback(
            (e) => {
                let n = null == e ? void 0 : e.value;
                return null == n || '' === n
                    ? null
                    : (0, l.jsx)(w, {
                          className: s()({ [j.disabledOption]: null == e ? void 0 : e.disabled }),
                          availableSlots: S[n]
                      });
            },
            [S]
        ),
        E = a.useCallback(
            (e) =>
                (0, l.jsx)('div', {
                    className: s()({ [j.disabledOption]: e.disabled }),
                    children: e.label
                }),
            []
        ),
        I = a.useCallback(
            (e) => {
                S[e] <= 0 || i(e);
            },
            [S, i]
        ),
        P = (() => {
            let e = S[null != n ? n : b.lds];
            return null == e || e > 0 ? n : void 0;
        })();
    return (0, l.jsx)(o.VcW, {
        className: t,
        onChange: I,
        value: P,
        multi: !1,
        options: Z,
        renderOptionPrefix: M,
        renderOptionSuffix: k,
        renderOptionLabel: E,
        placeholder: 0 === Z.length ? N.intl.string(N.t.O3i2gY) : N.intl.string(N.t.CunCMD)
    });
}
