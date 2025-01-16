t.d(n, {
    Z: function () {
        return w;
    }
}),
    t(47120);
var l = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
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
    v = t(208049),
    x = t(763296),
    N = t(710111),
    y = t(981631),
    b = t(388032),
    j = t(693793);
function C(e) {
    let { availableSlots: n, className: t } = e;
    return (0, l.jsxs)(o.Text, {
        className: r()(j.suffixNode, t),
        variant: 'text-sm/medium',
        color: 'text-primary',
        children: [
            (0, l.jsx)(o.VoiceNormalIcon, {
                size: 'md',
                color: 'currentColor',
                className: j.speakerIcon
            }),
            b.intl.format(b.t['8Dyg1N'], { slots: n })
        ]
    });
}
function w(e) {
    let { value: n, className: t, onChange: i } = e,
        w = (0, s.cj)([m.ZP, f.Z, h.default, d.Z], () => {
            let e = {};
            for (let n of m.ZP.getFlattenedGuildIds()) {
                let t = d.Z.getGuild(n);
                if (null != t) (0, c.Gw)(t, f.Z, h.default).canCreateExpressions && (e[t.id] = t);
            }
            return e;
        }),
        S = (0, s.cj)(
            [x.Z],
            () => {
                let e = {};
                for (let [t, l] of p.default.entries(w)) {
                    var n;
                    let a = (0, g.yw)(l, null !== (n = x.Z.getSoundsForGuild(t)) && void 0 !== n ? n : N.Hy, l.premiumTier);
                    e[t] = a;
                }
                return e;
            },
            [w]
        );
    a.useEffect(() => {
        (0, v.w)();
    }, []);
    let I = a.useMemo(
            () =>
                Object.values(w).map((e) => {
                    let { name: n, id: t } = e;
                    return {
                        label: n,
                        value: t,
                        disabled: S[t] <= 0
                    };
                }),
            [w, S]
        ),
        E = a.useCallback(
            (e) =>
                null == e || '' === e.value
                    ? null
                    : (0, l.jsx)(u.Z, {
                          className: r()(j.guildSelectOptionIcon, { [j.disabledOption]: e.disabled }),
                          guild: w[e.value],
                          size: u.Z.Sizes.SMOL,
                          active: !0
                      }),
            [w]
        ),
        M = a.useCallback(
            (e) => {
                let n = null == e ? void 0 : e.value;
                return null == n || '' === n
                    ? null
                    : (0, l.jsx)(C, {
                          className: r()({ [j.disabledOption]: null == e ? void 0 : e.disabled }),
                          availableSlots: S[n]
                      });
            },
            [S]
        ),
        Z = a.useCallback(
            (e) =>
                (0, l.jsx)('div', {
                    className: r()({ [j.disabledOption]: e.disabled }),
                    children: e.label
                }),
            []
        ),
        T = a.useCallback(
            (e) => {
                !(S[e] <= 0) && i(e);
            },
            [S, i]
        ),
        _ = (() => {
            let e = S[null != n ? n : y.lds];
            return null == e || e > 0 ? n : void 0;
        })();
    return (0, l.jsx)(o.SearchableSelect, {
        className: t,
        onChange: T,
        value: _,
        multi: !1,
        options: I,
        renderOptionPrefix: E,
        renderOptionSuffix: M,
        renderOptionLabel: Z,
        placeholder: 0 === I.length ? b.intl.string(b.t.O3i2gY) : b.intl.string(b.t.CunCMD)
    });
}
