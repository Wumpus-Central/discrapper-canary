t.d(n, { Z: () => C }), t(388685);
var l = t(54381),
    a = t(473749),
    i = t(120356),
    r = t.n(i),
    s = t(442837),
    o = t(481060),
    u = t(565138),
    c = t(357156),
    d = t(430824),
    f = t(496675),
    m = t(771845),
    g = t(594174),
    h = t(267642),
    v = t(709054),
    p = t(208049),
    b = t(763296),
    y = t(710111),
    j = t(981631),
    x = t(388032),
    N = t(697847);
function w(e) {
    let { availableSlots: n, className: t } = e;
    return (0, l.jsxs)(o.Text, {
        className: r()(N.suffixNode, t),
        variant: "text-sm/medium",
        color: "text-primary",
        children: [
            (0, l.jsx)(o.gj8, {
                size: "md",
                color: "currentColor",
                className: N.speakerIcon,
            }),
            x.intl.format(x.t["8Dyg1C"], { slots: n }),
        ],
    });
}
function C(e) {
    let { label: n, value: t, className: i, onChange: C } = e,
        S = (0, s.cj)([m.ZP, f.Z, g.default, d.Z], () => {
            let e = {};
            for (let n of m.ZP.getFlattenedGuildIds()) {
                let t = d.Z.getGuild(n);
                null != t && (0, c.Gw)(t, f.Z, g.default).canCreateExpressions && (e[t.id] = t);
            }
            return e;
        }),
        O = (0, s.cj)([b.Z], () => {
            let e = {};
            for (let [t, l] of v.default.entries(S)) {
                var n;
                let a = (0, h.yw)(l, null != (n = b.Z.getSoundsForGuild(t)) ? n : y.Hy, l.premiumTier);
                e[t] = a;
            }
            return e;
        }, [S]);
    a.useEffect(() => {
        (0, p.w)();
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
                    : (0, l.jsx)(u.Z, {
                          className: r()(N.guildSelectOptionIcon, { [N.disabledOption]: e.disabled }),
                          guild: S[e.value],
                          size: u.Z.Sizes.SMOL,
                          active: !0,
                      }),
            [S],
        ),
        E = a.useCallback(
            (e) => {
                let n = null == e ? void 0 : e.value;
                return null == n || "" === n
                    ? null
                    : (0, l.jsx)(w, {
                          className: r()({ [N.disabledOption]: null == e ? void 0 : e.disabled }),
                          availableSlots: O[n],
                      });
            },
            [O],
        ),
        M = a.useCallback(
            (e) =>
                (0, l.jsx)("div", {
                    className: r()({ [N.disabledOption]: e.disabled }),
                    children: e.label,
                }),
            [],
        ),
        k = a.useCallback(
            (e) => {
                O[e] <= 0 || C(e);
            },
            [O, C],
        ),
        I = (() => {
            let e = O[null != t ? t : j.lds];
            return null == e || e > 0 ? t : void 0;
        })();
    return (0, l.jsx)(o.VcW, {
        label: n,
        className: i,
        onChange: k,
        value: I,
        multi: !1,
        options: Z,
        renderOptionPrefix: P,
        renderOptionSuffix: E,
        renderOptionLabel: M,
        placeholder: 0 === Z.length ? x.intl.string(x.t.O3i2gV) : x.intl.string(x.t.CunCMN),
    });
}
