var a = t(582128),
    i = t(508425),
    r = t(559949),
    l = t(631670),
    s = t(471865),
    d = t(332560),
    o = t(773527),
    c = t(506988),
    u = t(207803),
    m = t(84540),
    p = t(287809),
    g = t(129230),
    A = t(501803),
    N = t(652215),
    h = t(211824);
t.d(
    n,
    {},
    {
        b: { TRY_THIS_STYLE: "try_this_style", PROFILE_EDITOR: "profile_editor" },
        v: function (e) {
            let {
                    hasChanges: n,
                    entryPoint: t,
                    selectedFontId: y,
                    selectedEffectId: S,
                    selectedColors: I,
                    defaultColor: f,
                    guildId: v,
                    isTryItOut: T,
                    onClose: _,
                    onEnrollmentError: E,
                    shouldSaveWithoutPendingChanges: L = !1,
                    onSaveError: D,
                } = e,
                C = a.useRef(!1),
                [P, k] = a.useState(!1);
            return {
                handleApply: a.useCallback(async () => {
                    if (!(n || L) || C.current) return;
                    let e = (0, A.eT)({ fontId: y, effectId: S, colors: I }, f),
                        a = !0 !== T && e.fontId === h.vl;
                    async function P() {
                        if ((a && (0, s.WT)(), L)) {
                            C.current = !0;
                            let n = a && !(0, o.Jy)(p.default.getCurrentUser()?.displayNameStyles);
                            try {
                                let t = await (0, l._L)({ displayNameStyles: e });
                                if (t?.ok !== !0) return void D?.();
                                n &&
                                    (0, d.Cy)({
                                        perks: [h.vB.DISPLAY_NAME_STYLE],
                                        content: c.uF.DISPLAY_NAME_STYLES_SETTINGS,
                                        contentSurface: d.rl.USER_PROFILE,
                                    });
                            } catch {
                                D?.();
                                return;
                            } finally {
                                C.current = !1;
                            }
                        } else T ? (0, u.EW)(e) : (0, m.p)({ guildId: v, displayNameStyles: e });
                        (g.default.track(N.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: r.x[y],
                            effect_name: i.z[S],
                            colors: I,
                            entry_point: t,
                        }),
                            a && (0, s.VN)(h.vB.DISPLAY_NAME_STYLE),
                            _?.());
                    }
                    if (!a || (0, o.Rd)(p.default.getCurrentUser(), h.vB.DISPLAY_NAME_STYLE)) return void (await P());
                    ((C.current = !0), k(!0));
                    let Y = !1;
                    try {
                        Y = await (0, s.Br)(h.vB.DISPLAY_NAME_STYLE);
                    } catch {
                        Y = !1;
                    }
                    ((C.current = !1), k(!1), Y) ? await P() : E?.();
                }, [n, t, y, S, I, f, _, E, v, T, L, D]),
                isApplying: P,
            };
        },
    },
);
