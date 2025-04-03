t.d(n, { Z: () => C }), t(47120);
var l = t(200651),
    a = t(192379),
    r = t(120356),
    i = t.n(r),
    s = t(442837),
    o = t(481060),
    u = t(565138),
    c = t(357156),
    d = t(430824),
    f = t(496675),
    m = t(771845),
    h = t(594174),
    g = t(267642),
    p = t(709054),
    b = t(208049),
    y = t(763296),
    v = t(710111),
    x = t(981631),
    j = t(388032),
    N = t(696200);
function w(e) {
    let { availableSlots: n, className: t } = e;
    return (0, l.jsxs)(o.Text, {
        className: i()(N.suffixNode, t),
        variant: 'text-sm/medium',
        color: 'text-primary',
        children: [
            (0, l.jsx)(o.gj8, {
                size: 'md',
                color: 'currentColor',
                className: N.speakerIcon
            }),
            j.NW.format(j.t['8Dyg1N'], { slots: n })
        ]
    });
}
function C(e) {
    let { value: n, className: t, onChange: r } = e,
        C = (0, s.cj)([m.ZP, f.Z, h.default, d.Z], () => {
            let e = {};
            for (let n of m.ZP.getFlattenedGuildIds()) {
                let t = d.Z.getGuild(n);
                null != t && (0, c.Gw)(t, f.Z, h.default).canCreateExpressions && (e[t.id] = t);
            }
            return e;
        }),
        S = (0, s.cj)(
            [y.Z],
            () => {
                let e = {};
                for (let [t, l] of p.default.entries(C)) {
                    var n;
                    let a = (0, g.yw)(l, null != (n = y.Z.getSoundsForGuild(t)) ? n : v.Hy, l.premiumTier);
                    e[t] = a;
                }
                return e;
            },
            [C]
        );
    a.useEffect(() => {
        (0, b.w)();
    }, []);
    let O = a.useMemo(
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
        P = a.useCallback(
            (e) =>
                null == e || '' === e.value
                    ? null
                    : (0, l.jsx)(u.Z, {
                          className: i()(N.guildSelectOptionIcon, { [N.disabledOption]: e.disabled }),
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
                          className: i()({ [N.disabledOption]: null == e ? void 0 : e.disabled }),
                          availableSlots: S[n]
                      });
            },
            [S]
        ),
        Z = a.useCallback(
            (e) =>
                (0, l.jsx)('div', {
                    className: i()({ [N.disabledOption]: e.disabled }),
                    children: e.label
                }),
            []
        ),
        M = a.useCallback(
            (e) => {
                S[e] <= 0 || r(e);
            },
            [S, r]
        ),
        E = (() => {
            let e = S[null != n ? n : x.lds];
            return null == e || e > 0 ? n : void 0;
        })();
    return (0, l.jsx)(o.VcW, {
        className: t,
        onChange: M,
        value: E,
        multi: !1,
        options: O,
        renderOptionPrefix: P,
        renderOptionSuffix: k,
        renderOptionLabel: Z,
        placeholder: 0 === O.length ? j.NW.string(j.t.O3i2gY) : j.NW.string(j.t.CunCMD)
    });
}
