t.d(n, { Z: () => S }), t(388685);
var l = t(54381),
    a = t(473749),
    i = t(120356),
    r = t.n(i),
    s = t(442837),
    o = t(668339),
    u = t(481060),
    c = t(565138),
    d = t(357156),
    f = t(430824),
    m = t(496675),
    g = t(771845),
    h = t(594174),
    v = t(267642),
    p = t(709054),
    b = t(208049),
    y = t(763296),
    j = t(710111),
    x = t(981631),
    N = t(388032),
    w = t(697847);
function C(e) {
    let { availableSlots: n, className: t } = e;
    return (0, l.jsxs)(u.Text, {
        className: r()(w.suffixNode, t),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, l.jsx)(u.gj8, {
                size: "md",
                color: "currentColor",
                className: w.speakerIcon,
            }),
            N.intl.format(N.t["8Dyg1C"], { slots: n }),
        ],
    });
}
function S(e) {
    let { label: n, value: t, className: i, onChange: u } = e,
        S = (0, s.cj)([g.ZP, m.Z, h.default, f.Z], () => {
            let e = {};
            for (let n of g.ZP.getFlattenedGuildIds()) {
                let t = f.Z.getGuild(n);
                null != t && (0, d.Gw)(t, m.Z, h.default).canCreateExpressions && (e[t.id] = t);
            }
            return e;
        }),
        O = (0, s.cj)([y.Z], () => {
            let e = {};
            for (let [t, l] of p.default.entries(S)) {
                var n;
                let a = (0, v.yw)(l, null != (n = y.Z.getSoundsForGuild(t)) ? n : j.Hy, l.premiumTier);
                e[t] = a;
            }
            return e;
        }, [S]);
    a.useEffect(() => {
        (0, b.w)();
    }, []);
    let Z = a.useMemo(
            () =>
                Object.values(S).map((e) => {
                    let { name: n, id: t } = e;
                    return {
                        label: n,
                        value: t,
                        disabled: O[t] <= 0,
                    };
                }),
            [S, O],
        ),
        P = a.useCallback(
            (e) =>
                null == e || "" === e.value
                    ? null
                    : (0, l.jsx)(c.Z, {
                          className: r()(w.guildSelectOptionIcon, { [w.disabledOption]: e.disabled }),
                          guild: S[e.value],
                          size: c.Z.Sizes.SMOL,
                          active: !0,
                      }),
            [S],
        ),
        E = a.useCallback(
            (e) => {
                let n = null == e ? void 0 : e.value;
                return null == n || "" === n
                    ? null
                    : (0, l.jsx)(C, {
                          className: r()({ [w.disabledOption]: null == e ? void 0 : e.disabled }),
                          availableSlots: O[n],
                      });
            },
            [O],
        ),
        M = a.useCallback(
            (e) =>
                (0, l.jsx)("div", {
                    className: r()({ [w.disabledOption]: e.disabled }),
                    children: e.label,
                }),
            [],
        ),
        k = a.useCallback(
            (e) => {
                O[e] <= 0 || u(e);
            },
            [O, u],
        ),
        I = (() => {
            let e = O[null != t ? t : x.lds];
            return null == e || e > 0 ? t : void 0;
        })();
    return (0, l.jsx)(o.d, {
        label: n,
        className: i,
        onChange: k,
        value: I,
        multi: !1,
        options: Z,
        renderOptionPrefix: P,
        renderOptionSuffix: E,
        renderOptionLabel: M,
        placeholder: 0 === Z.length ? N.intl.string(N.t.O3i2gV) : N.intl.string(N.t.CunCMN),
    });
}
