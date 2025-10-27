t.d(n, { Z: () => C }), t(388685);
var a = t(951288),
    l = t(647438),
    r = t(120356),
    i = t.n(r),
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
    b = t(208049),
    y = t(763296),
    v = t(710111),
    x = t(981631),
    j = t(388032),
    w = t(697847);
function _(e) {
    let { availableSlots: n, className: t } = e;
    return (0, a.jsxs)(s.Text, {
        className: i()(w.suffixNode, t),
        variant: "text-sm/medium",
        color: "text-primary",
        children: [
            (0, a.jsx)(s.gj8, {
                size: "md",
                color: "currentColor",
                className: w.speakerIcon,
            }),
            j.intl.format(j.t["8Dyg1C"], { slots: n }),
        ],
    });
}
function C(e) {
    let { label: n, value: t, className: r, onChange: C } = e,
        N = (0, o.cj)([m.ZP, f.Z, g.default, d.Z], () => {
            let e = {};
            for (let n of m.ZP.getFlattenedGuildIds()) {
                let t = d.Z.getGuild(n);
                null != t && (0, c.Gw)(t, f.Z, g.default).canCreateExpressions && (e[t.id] = t);
            }
            return e;
        }),
        S = (0, o.cj)([y.Z], () => {
            let e = {};
            for (let [t, a] of p.default.entries(N)) {
                var n;
                let l = (0, h.yw)(a, null != (n = y.Z.getSoundsForGuild(t)) ? n : v.Hy, a.premiumTier);
                e[t] = l;
            }
            return e;
        }, [N]);
    l.useEffect(() => {
        (0, b.w)();
    }, []);
    let O = l.useMemo(
            () =>
                Object.values(N).map((e) => {
                    let { name: n, id: t } = e;
                    return {
                        label: n,
                        value: t,
                        disabled: S[t] <= 0,
                    };
                }),
            [N, S],
        ),
        P = l.useCallback(
            (e) =>
                null == e || "" === e.value
                    ? null
                    : (0, a.jsx)(u.Z, {
                          className: i()(w.guildSelectOptionIcon, { [w.disabledOption]: e.disabled }),
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
                          className: i()({ [w.disabledOption]: null == e ? void 0 : e.disabled }),
                          availableSlots: S[n],
                      });
            },
            [S],
        ),
        I = l.useCallback(
            (e) =>
                (0, a.jsx)("div", {
                    className: i()({ [w.disabledOption]: e.disabled }),
                    children: e.label,
                }),
            [],
        ),
        M = l.useCallback(
            (e) => {
                S[e] <= 0 || C(e);
            },
            [S, C],
        ),
        Z = (() => {
            let e = S[null != t ? t : x.lds];
            return null == e || e > 0 ? t : void 0;
        })();
    return (0, a.jsx)(s.VcW, {
        label: n,
        className: r,
        onChange: M,
        value: Z,
        multi: !1,
        options: O,
        renderOptionPrefix: P,
        renderOptionSuffix: E,
        renderOptionLabel: I,
        placeholder: 0 === O.length ? j.intl.string(j.t.O3i2gV) : j.intl.string(j.t.CunCMN),
    });
}
