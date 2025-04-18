n.d(t, { Z: () => C }), n(388685);
var l = n(200651),
    a = n(192379),
    r = n(120356),
    i = n.n(r),
    s = n(442837),
    o = n(481060),
    u = n(565138),
    c = n(357156),
    d = n(430824),
    f = n(496675),
    m = n(771845),
    h = n(594174),
    g = n(267642),
    p = n(709054),
    y = n(208049),
    b = n(763296),
    v = n(710111),
    x = n(981631),
    j = n(388032),
    N = n(696200);
function w(e) {
    let { availableSlots: t, className: n } = e;
    return (0, l.jsxs)(o.Text, {
        className: i()(N.suffixNode, n),
        variant: 'text-sm/medium',
        color: 'text-primary',
        children: [
            (0, l.jsx)(o.gj8, {
                size: 'md',
                color: 'currentColor',
                className: N.speakerIcon
            }),
            j.NW.format(j.t['8Dyg1N'], { slots: t })
        ]
    });
}
function C(e) {
    let { value: t, className: n, onChange: r } = e,
        C = (0, s.cj)([m.ZP, f.Z, h.default, d.Z], () => {
            let e = {};
            for (let t of m.ZP.getFlattenedGuildIds()) {
                let n = d.Z.getGuild(t);
                null != n && (0, c.Gw)(n, f.Z, h.default).canCreateExpressions && (e[n.id] = n);
            }
            return e;
        }),
        S = (0, s.cj)(
            [b.Z],
            () => {
                let e = {};
                for (let [n, l] of p.default.entries(C)) {
                    var t;
                    let a = (0, g.yw)(l, null != (t = b.Z.getSoundsForGuild(n)) ? t : v.Hy, l.premiumTier);
                    e[n] = a;
                }
                return e;
            },
            [C]
        );
    a.useEffect(() => {
        (0, y.w)();
    }, []);
    let O = a.useMemo(
            () =>
                Object.values(C).map((e) => {
                    let { name: t, id: n } = e;
                    return {
                        label: t,
                        value: n,
                        disabled: S[n] <= 0
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
        E = a.useCallback(
            (e) => {
                let t = null == e ? void 0 : e.value;
                return null == t || '' === t
                    ? null
                    : (0, l.jsx)(w, {
                          className: i()({ [N.disabledOption]: null == e ? void 0 : e.disabled }),
                          availableSlots: S[t]
                      });
            },
            [S]
        ),
        k = a.useCallback(
            (e) =>
                (0, l.jsx)('div', {
                    className: i()({ [N.disabledOption]: e.disabled }),
                    children: e.label
                }),
            []
        ),
        Z = a.useCallback(
            (e) => {
                S[e] <= 0 || r(e);
            },
            [S, r]
        ),
        M = (() => {
            let e = S[null != t ? t : x.lds];
            return null == e || e > 0 ? t : void 0;
        })();
    return (0, l.jsx)(o.VcW, {
        className: n,
        onChange: Z,
        value: M,
        multi: !1,
        options: O,
        renderOptionPrefix: P,
        renderOptionSuffix: E,
        renderOptionLabel: k,
        placeholder: 0 === O.length ? j.NW.string(j.t.O3i2gY) : j.NW.string(j.t.CunCMD)
    });
}
