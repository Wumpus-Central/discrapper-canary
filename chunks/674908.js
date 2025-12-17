n.d(t, { Z: () => R });
var l = n(54381),
    a = n(473749),
    i = n(442837),
    r = n(36563),
    s = n(481060),
    o = n(239091),
    u = n(835473),
    c = n(471445),
    d = n(925329),
    m = n(305347),
    h = n(592125),
    p = n(906467),
    f = n(430824),
    v = n(594174),
    g = n(55935),
    b = n(823379),
    j = n(709054),
    x = n(435064),
    y = n(894694),
    N = n(39604),
    C = n(930311),
    k = n(680056),
    E = n(115559),
    S = n(356659),
    w = n(388032),
    O = n(955114);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e) {
    var t;
    let { clip: R, channelId: L, onClose: P } = e,
        A = R.type === y.NJ.SCREENSHOT,
        {
            getEditedClip: M,
            voiceAudioEnabled: D,
            setVoiceAudioEnabled: U,
            applicationAudioEnabled: Z,
            setApplicationAudioEnabled: z,
            soundboardAudioEnabled: B,
            setSoundboardAudioEnabled: V,
            pause: F,
            clipName: G,
            setClipName: _,
            isTemporary: K,
            setIsTemporary: W,
        } = (0, E.D)(),
        H = (0, u.q)(R.applicationId),
        q = (0, i.e7)([x.Z], () => x.Z.isClipExporting(R.id)),
        { onShareClick: Y } = (0, k.Z)(L),
        J = (0, i.e7)([p.Z], () => p.Z.isDeveloper),
        X = (0, C.q)(R),
        $ = a.useCallback(async () => {
            await (0, N.WY)(R.id), W(!1);
        }, [R.id, W]),
        Q = (0, i.Wu)([v.default], () => R.users.map(v.default.getUser).filter(b.lm)),
        ee = a.useMemo(() => new Date(j.default.extractTimestamp(R.id)), [R.id]),
        et = (0, i.e7)([f.Z], () => (R.version >= 3 && null != R.guildId ? f.Z.getGuild(R.guildId) : null)),
        en = (0, i.e7)([h.Z], () => (R.version >= 3 && null != R.channelId ? h.Z.getChannel(R.channelId) : null)),
        el = null != en ? (0, c.KS)(en, et) : null;
    return (0, l.jsxs)("div", {
        className: O.clipForm,
        children: [
            (0, l.jsxs)("div", {
                className: O.clipFormHeader,
                children: [
                    (0, l.jsxs)("div", {
                        className: O.headerContent,
                        children: [
                            (0, l.jsx)(d.Z, {
                                game: H,
                                size: d.A.XSMALL,
                            }),
                            (0, l.jsx)(s.Heading, {
                                variant: "heading-md/medium",
                                color: "text-default",
                                className: O.headerTitle,
                                children: null != (t = null == H ? void 0 : H.name) ? t : R.applicationName,
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: O.headerButtons,
                        children: [
                            J &&
                                (0, l.jsx)(s.hU, {
                                    onClick: function () {
                                        (0, s.ZDy)(
                                            async () => {
                                                let { default: e } = await n.e("90946").then(n.bind(n, 69480));
                                                return (t) => (0, l.jsx)(e, I(T({}, t), { clip: R }));
                                            },
                                            { stackingBehavior: "stack" },
                                        );
                                    },
                                    icon: s.nnZ,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": "Debug Info",
                                }),
                            (0, l.jsx)(s.hU, {
                                onClick: P,
                                icon: s.Uz9,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": w.intl.string(w.t.cpT0Cq),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(s.zJl, {
                className: O.clipFormSection,
                children: (0, l.jsxs)(s.C3N, {
                    children: [
                        K &&
                            (0, l.jsx)(s.M14, {
                                type: "info",
                                children: (0, l.jsxs)(s.Kqy, {
                                    gap: 8,
                                    children: [
                                        (0, l.jsx)(s.Text, {
                                            variant: "text-sm/normal",
                                            children: w.intl.string(w.t.EkUv4u),
                                        }),
                                        (0, l.jsx)(s.Button, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: $,
                                            text: w.intl.string(w.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        (0, l.jsx)(s.oil, {
                            label: w.intl.string(w.t.SJKc5n),
                            onChange: (e) => {
                                "" === e ? _(void 0) : _(e);
                            },
                            value: G,
                            minLength: S.XH,
                            maxLength: S.MG,
                            placeholder: X,
                        }),
                        !A &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(s.kcT, {
                                        label: w.intl.string(w.t.GnQui9),
                                        checked: Z,
                                        onChange: z,
                                    }),
                                    (0, l.jsx)(s.kcT, {
                                        label: w.intl.string(w.t["5mVOCb"]),
                                        checked: D,
                                        onChange: U,
                                    }),
                                    (0, l.jsx)(s.kcT, {
                                        label: w.intl.string(w.t["8K7Ges"]),
                                        checked: B,
                                        onChange: V,
                                    }),
                                ],
                            }),
                        (0, l.jsx)(s.gNt, {
                            label: w.intl.string(w.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, l.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, g.Y4)(ee),
                            }),
                        }),
                        (0, l.jsx)(s.gNt, {
                            label: w.intl.string(w.t.WTozwe),
                            layout: "horizontal",
                            children: (0, l.jsx)(r.Z, {
                                users: Q,
                                maxUsers: 10,
                            }),
                        }),
                        null != et &&
                            (0, l.jsx)(s.gNt, {
                                label: w.intl.string(w.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, l.jsxs)("div", {
                                    className: O.fieldContent,
                                    children: [
                                        (0, l.jsx)(m.ZP, {
                                            guild: et,
                                            iconSize: 16,
                                        }),
                                        (0, l.jsx)(s.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: et.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != en &&
                            null != el &&
                            (0, l.jsx)(s.gNt, {
                                label: w.intl.string(w.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, l.jsxs)("div", {
                                    className: O.fieldContent,
                                    children: [
                                        (0, l.jsx)(el, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                        }),
                                        (0, l.jsx)(s.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: en.name,
                                        }),
                                    ],
                                }),
                            }),
                        R.version >= 3 &&
                            null != R.activity &&
                            (null != R.activity.state || null != R.activity.details) &&
                            (0, l.jsx)(s.gNt, {
                                label: w.intl.string(w.t.aTpwmw),
                                layout: "horizontal",
                                children: (0, l.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: [R.activity.state, R.activity.details].filter(Boolean).join(" \u203A "),
                                }),
                            }),
                    ],
                }),
            }),
            (0, l.jsx)("div", {
                className: O.clipFormFooter,
                children: (0, l.jsxs)(s.ButtonGroup, {
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, l.jsx)(s.Button, {
                            loading: q,
                            disabled: q,
                            variant: "primary",
                            icon: s.aAc,
                            iconPosition: "start",
                            onClick: () => Y({ clips: [M()] }),
                            text: w.intl.string(w.t.RDE0Sc),
                        }),
                        (0, l.jsx)(s.hU, {
                            "aria-label": w.intl.string(w.t.PdRCRg),
                            loading: q,
                            disabled: q,
                            variant: "secondary",
                            onClick: function (e) {
                                F(),
                                    (0, o.jW)(e, async () => {
                                        let { default: e } = await n.e("32157").then(n.bind(n, 151090));
                                        return (t) =>
                                            (0, l.jsx)(
                                                e,
                                                I(T({}, t), {
                                                    clips: [M()],
                                                    channelId: L,
                                                    onAfterDelete: P,
                                                }),
                                            );
                                    });
                            },
                            icon: s.xhG,
                        }),
                    ],
                }),
            }),
        ],
    });
}
