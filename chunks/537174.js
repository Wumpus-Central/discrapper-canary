var s = i(582128),
    a = i(317097),
    o = i(855986),
    l = i(602853),
    u = i(646514),
    r = i(775602),
    c = i(521427);
(i(381941),
    i.d(
        t,
        {},
        {
            A: function (e) {
                let { ignoreAccessibilityPreference: t = !1 } =
                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, l.r)(u.A.colors.BACKGROUND_BASE_LOWER).hex(),
                    d = (0, o.bG)([r.Ay], () => (r.Ay.desaturateUserColors ? r.Ay.saturation : 1)),
                    f = (0, o.bG)([r.Ay], () => r.Ay.officialMessageStyle);
                return s.useMemo(() => {
                    if (null == e) return;
                    let s = t ? "default" : f;
                    if ("hidden" === s) return;
                    let o = "no_gradient" !== s;
                    return {
                        "--custom-guild-official-message": (0, a.$k)(e, !0),
                        "--custom-guild-official-message-hsl": (0, a.BK)(e, !0),
                        "--custom-guild-official-message-alpha": 0.16 * !!o,
                        "--custom-guild-official-message-dither-opacity": +!!o,
                        "--custom-guild-official-message-text":
                            "no_text_color" !== s ? (0, c.Fy)(e, i, d, 0.16 * !!o).hex() : "var(--text-default)",
                    };
                }, [e, i, d, f, t]);
            },
            o: function () {
                return (0, o.bG)([r.Ay], () => "hidden" === r.Ay.officialMessageStyle);
            },
        },
    ));
