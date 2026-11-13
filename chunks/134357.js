(i.d(t, { Ay: () => eA, aW: () => eI, rj: () => eg }), i(321073));
var n = i(477900),
    l = i(582128),
    a = i(503698),
    s = i.n(a),
    d = i(435558),
    r = i.n(d),
    u = i(855986),
    o = i(646514),
    c = i(863610),
    m = i(602853),
    g = i(73153),
    I = i(129230),
    A = i(652215);
let f = {
    dismissForApplicationId(e) {
        (g.h.dispatch({ type: "ACTIVITY_INVITE_EDUCATION_DISMISS", key: e, value: !0 }),
            I.default.track(A.HAw.CLOSE_TUTORIAL, {
                tutorial: "activity-invite-nux-inline",
                application_id: e,
                acknowledged: !0,
            }));
    },
};
var h = i(770178),
    N = i(55730),
    E = i(587895),
    p = i(834730),
    G = i(291747),
    S = i(866665),
    v = i(101392),
    C = i(188567),
    x = i(960850),
    y = i(233531);
function j(e) {
    let { isEnabled: t, rateLimitPerUser: i, isBypassSlowmode: a, slowmodeCooldownGuess: s } = e,
        [d, r] = l.useState(!1);
    if (
        (l.useEffect(() => {
            function e() {
                (r(!0),
                    setTimeout(() => {
                        r(!1);
                    }, 1e3));
            }
            return (
                C._.subscribe(A.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e),
                () => {
                    C._.unsubscribe(A.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e);
                }
            );
        }, []),
        !t)
    )
        return null;
    let u = (0, x.VI)(i),
        o = (0, x.pS)(s, a),
        c = (0, n.jsxs)(p.E, {
            className: y.rk,
            variant: "body-xs/medium",
            color: d ? "text-feedback-critical" : "text-muted",
            tabularNumbers: !0,
            children: [(0, n.jsx)(G.TimerIcon, { size: "xxs", color: "currentColor", className: y.Eq }), o],
        });
    return (0, n.jsx)(S.m, { text: u, children: (0, n.jsx)("div", { className: y.ns, children: c }) });
}
function R(e) {
    let { channel: t, isThreadCreation: i = !1 } = e,
        l = (0, u.bG)([v.A], () => v.A.getSlowmodeCooldownGuess(t.id, i ? v.R.CreateThread : v.R.SendMessage)),
        a = (0, x._i)(t),
        { rateLimitPerUser: s } = t;
    return (0, n.jsx)(j, { isEnabled: s > 0, rateLimitPerUser: s, isBypassSlowmode: a, slowmodeCooldownGuess: l });
}
var T = i(870600),
    _ = i(136722),
    b = i(76573),
    U = i(865116);
(i(121681), i(7584), i(836602));
var O = i(734057);
i(711014);
var P = i(287809);
i(690521);
var D = i(488926);
i(307731);
var k = i(11339);
(b.gm.UNSPECIFIED,
    k.default["6Cdy4a"],
    b.gm.YAPPING,
    k.default.E5VRaj,
    b.gm.VENTING,
    k.default.xmxdPC,
    b.gm.OVERSHARING,
    k.default["qGaH/9"],
    b.gm.BARKING,
    k.default.M282uk,
    b.gm.BABBLING,
    k.default.myNZDT,
    b.gm.DAYDREAMING,
    k.default.F7RLTP,
    b.gm.MEOWING,
    k.default.EfxyQI,
    b.gm.PURRING,
    k.default.PXYYXj,
    b.gm.CHIRPING,
    k.default.mnCAqf,
    b.gm.KEYSMASHING,
    k.default["123+VB"],
    b.gm.THINKING,
    k.default["/wXIQV"],
    b.gm.SQUEAKING,
    k.default.khnYc8);
let L = {
        [b.gm.UNSPECIFIED]: k.default.kh4K4F,
        [b.gm.YAPPING]: k.default.m9AeqG,
        [b.gm.VENTING]: k.default["SZ0/Qu"],
        [b.gm.OVERSHARING]: k.default.N8cWE8,
        [b.gm.BARKING]: k.default.L5aWEN,
        [b.gm.BABBLING]: k.default.AoBaEw,
        [b.gm.DAYDREAMING]: k.default["3hOLod"],
        [b.gm.MEOWING]: k.default["0Z9/o9"],
        [b.gm.PURRING]: k.default.oK1MLW,
        [b.gm.CHIRPING]: k.default.JPVvqj,
        [b.gm.KEYSMASHING]: k.default.JfieQ4,
        [b.gm.THINKING]: k.default.kz3mf0,
        [b.gm.SQUEAKING]: k.default.HyvucT,
    },
    M = [
        b.gm.UNSPECIFIED,
        b.gm.YAPPING,
        b.gm.VENTING,
        b.gm.OVERSHARING,
        b.gm.BARKING,
        b.gm.BABBLING,
        b.gm.DAYDREAMING,
        b.gm.MEOWING,
    ],
    w = [b.gm.PURRING, b.gm.CHIRPING, b.gm.KEYSMASHING, b.gm.THINKING, b.gm.SQUEAKING];
function B() {
    return (0, u.bG)([U.Ay], () => U.Ay.get("preview_own_typing_indicator"));
}
([...M, ...w], b.pR.PULSE, b.pR.RING, b.pR.WAVE);
var H = i(565645),
    V = i(250944);
let K = { [b.pR.PULSE]: V.U6, [b.pR.RING]: V.hN, [b.pR.WAVE]: V.Mz };
function W(e) {
    let { config: t, className: i } = e,
        l = K[(0, T.Zc)(t)],
        a = (0, T.aj)(t.emojis);
    return (0, n.jsx)(
        "div",
        {
            className: s()(V.nI, i),
            "aria-hidden": !0,
            children: t.emojis.map((e, t) =>
                (0, n.jsx)(
                    H.A,
                    {
                        className: s()(V.Zg, l),
                        emojiId: e.id,
                        emojiName: null == e.id ? e.name : void 0,
                        surrogate: null == e.id ? e.name : void 0,
                        animated: e.animated,
                        shouldAnimate: !0,
                        canSelect: !1,
                        size: "reaction",
                    },
                    t,
                ),
            ),
        },
        a,
    );
}
var F = i(810181),
    Y = i(608960),
    q = i(741961);
let Q = (0, i(945810).mj)({
    kind: "user",
    name: "2026-11-cti-desktop-viewer",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var Z = i(407278);
let z = {};
class X extends u.Ay.PersistedStore {
    static displayName = "ActivityInviteEducationStore";
    static persistKey = "ActivityInviteEducationExperimentStore";
    initialize(e) {
        Object.assign(z, e);
    }
    getState() {
        return z;
    }
    shouldShowEducation(e) {
        return !0 !== z[e];
    }
}
let J = new X(g.h, {
    ACTIVITY_INVITE_EDUCATION_DISMISS: function (e) {
        return ((z[e.key] = e.value), !0);
    },
});
var $ = i(629016),
    ee = i(576705),
    et = i(994500),
    ei = i(894768),
    en = i(531685),
    el = i(403362),
    ea = i(562153),
    es = i(345870),
    ed = i(792996),
    er = i(24504);
let eu = [];
class eo extends l.PureComponent {
    state = { fadeIn: !1 };
    timeout = null;
    componentDidMount() {
        this.timeout = setTimeout(() => {
            (this.setState({ fadeIn: !0 }), (this.timeout = null), this.logShownEventIfNeeded());
        }, 100);
    }
    componentDidUpdate() {
        this.logShownEventIfNeeded();
    }
    logShownEventIfNeeded() {
        let e = this.props.activity.application_id;
        null != e &&
            -1 === eu.indexOf(e) &&
            (I.default.track(A.HAw.SHOW_TUTORIAL, { tutorial: "activity-invite-nux-inline", application_id: e }),
            eu.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    handleDismissInviteEducation = () => {
        let { activity: e } = this.props;
        null != e && null != e.application_id && f.dismissForApplicationId(e.application_id);
    };
    render() {
        let { activity: e } = this.props;
        return (0, n.jsxs)("div", {
            className: s()(er.F4, { [er.gV]: this.state.fadeIn }),
            children: [
                (0, n.jsx)("div", { className: er.GZ }),
                (0, n.jsx)("span", {
                    children: ed.intl.format(ed.t["i/MoCt"], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation,
                    }),
                }),
            ],
        });
    }
}
function ec() {
    return (0, n.jsxs)("div", {
        className: er.r$,
        "aria-hidden": !0,
        children: [
            (0, n.jsx)("span", { className: er.Om }),
            (0, n.jsx)("span", { className: er.Om }),
            (0, n.jsx)("span", { className: er.Om }),
        ],
    });
}
function em(e) {
    let {
            activityInviteEducationActivity: t,
            isFocused: i,
            typingUsers: a,
            customTypingIndicatorConfig: d,
            className: r,
            channel: u,
            isThreadCreation: o,
            renderDots: m,
            renderSlowmode: g,
            isInTextChannel: I = !1,
            shouldShowLegacyGameInviteCreationBanner: A = !1,
        } = e,
        f = (0, es.v)("TypingUsers"),
        { rateLimitPerUser: N } = u,
        E = l.useRef(null),
        p = l.useRef(null),
        [G, S] = l.useState(!1),
        v = l.useCallback(() => {
            if (null == E.current || null == p.current) return;
            let e = E.current.getBoundingClientRect();
            p.current.scrollWidth + 56 > e.width ? S(!0) : S(!1);
        }, []);
    ((0, h.g)(E, v, [], { enabled: I }), (0, h.g)(p, v, [], { enabled: I }));
    let [C, x, y] = a,
        j = "";
    1 === a.length
        ? (j =
              null != d
                  ? ed.intl.format(L[d.typingSuggestion] ?? L[b.gm.UNSPECIFIED], { name: C })
                  : ed.intl.format(ed.t.lJ9sZX, { a: C }))
        : 2 === a.length
          ? (j = ed.intl.format(ed.t.rB0CUa, { a: C, b: x }))
          : 3 === a.length
            ? (j = ed.intl.format(ed.t.StKThj, { a: C, b: x, c: y }))
            : a.length > 3 && (j = ed.intl.format(ed.t.Q8lUnE, {}));
    let _ = null == d && G && a.length > 0 && a.length <= 3 ? ed.intl.format(ed.t["qD/0qZ"], {}) : j,
        U = a.length > 0 || N > 0 || A,
        O = !U && null != t,
        P = null;
    if (U)
        P = (0, n.jsxs)("div", {
            className: s()(er.IW, { "stop-animation": !i, [er.Il]: I }, r),
            "data-mtctest-ignore": "true",
            children: [
                0 === a.length && A
                    ? (0, n.jsx)(Z.A, {})
                    : (0, n.jsxs)("div", {
                          className: er.y5,
                          ref: E,
                          children: [
                              a.length > 0 &&
                                  !1 !== m &&
                                  (null != d && (0, T.zM)(d.emojis)
                                      ? (0, n.jsx)(W, { config: d, className: er.n6 })
                                      : f
                                        ? (0, n.jsx)(ec, {})
                                        : (0, n.jsx)(c.n, { className: er.gO, dotRadius: 3.5, themed: !0 })),
                              (0, n.jsx)("span", { className: er.Qq, "aria-hidden": !0, children: _ }),
                              (0, n.jsx)("span", {
                                  className: er.Qq,
                                  style: { position: "absolute", visibility: "hidden" },
                                  "aria-hidden": !0,
                                  ref: p,
                                  children: j,
                              }),
                          ],
                      }),
                !1 !== g && (0, n.jsx)(R, { channel: u, isThreadCreation: o }),
            ],
        });
    else O && null != t && (P = (0, n.jsx)(eo, { activity: t, isFocused: i }));
    return (0, n.jsxs)(n.Fragment, {
        children: [P, (0, n.jsx)("span", { className: er.y4, "aria-live": "polite", "aria-atomic": !0, children: j })],
    });
}
function eg(e) {
    let t = (0, u.bG)([q.A], () => q.A.getTypingUsers(e.id)),
        i = (0, u.bG)([P.default], () => P.default.getCurrentUser());
    return B() && null != i
        ? [ea.Ay.getName(e.guild_id, e.id, i)]
        : r()(t)
              .keys()
              .filter((e) => e !== i?.id)
              .reject((e) => et.A.isBlockedOrIgnored(e))
              .map((e) => P.default.getUser(e))
              .filter(el.Vq)
              .map((t) => ea.Ay.getName(e.guild_id, e.id, t))
              .value();
}
function eI(e) {
    let t = (0, u.bG)([ei.A], () => ei.A.findActivity((e) => null != e.application_id));
    return (0, u.bG)([J, E.A, et.A, $.A, ee.A], () =>
        (function (e) {
            let {
                    channel: t,
                    activity: i,
                    ActivityInviteEducationStore: n,
                    ApplicationStore: l,
                    RelationshipStore: a,
                    GamePartyStore: s,
                    PermissionStore: d,
                } = e,
                r = i?.application_id;
            if (
                null == t ||
                null == i ||
                !(0, N.A)(i, A.jUm.JOIN) ||
                null == r ||
                (!t.isPrivate() && !d.can(A.xBc.SEND_MESSAGES, t))
            )
                return !1;
            let u = l.getApplication(r);
            return (
                !(
                    null == u ||
                    u.isEmbedded ||
                    (t.isPrivate() && a.isBlockedOrIgnored(t.getRecipientId())) ||
                    (t.isDM() && s.getParty(i.party?.id)?.has(t.getRecipientId()) === !0)
                ) && n.shouldShowEducation(r)
            );
        })({
            channel: e,
            activity: t,
            ActivityInviteEducationStore: J,
            ApplicationStore: E.A,
            RelationshipStore: et.A,
            GamePartyStore: $.A,
            PermissionStore: ee.A,
        }),
    )
        ? t
        : null;
}
function eA(e) {
    let t,
        i,
        a,
        s,
        d,
        c,
        { channel: g, isThreadCreation: f = !1, ...h } = e,
        N = eg(g),
        E =
            ((t = Q.useConfig({ location: "TypingUsers" })),
            (i = B()),
            (a = (0, F.m)(g.id, 2)),
            (s = (function (e) {
                let { isThreadCreation: t, isPreviewingOwnTypingIndicator: i, currentUserId: n, typingUserIds: l } = e;
                return t ? null : i ? (n ?? null) : 1 === l.length ? l[0] : null;
            })({
                isThreadCreation: f,
                isPreviewingOwnTypingIndicator: i,
                currentUserId: (0, u.bG)([P.default], () => P.default.getCurrentUser()?.id),
                typingUserIds: a,
            })),
            (c =
                null !=
                (d = (0, u.bG)(
                    [q.A, P.default, Y.A],
                    () => {
                        if (null == s || !t) return null;
                        let e = i ? P.default.getUser(s)?.typingIndicatorStyle : q.A.getCustomTypingIndicatorConfig(s);
                        if (null == e) return null;
                        let n = g.getGuildId(),
                            l = null != n ? Y.A.getGuildEmojis(n) : null;
                        if (
                            null == g.getGuildId() ||
                            0 === e.emojis.length ||
                            !e.emojis.some((e) => null != e.id && l?.[e.id] == null)
                        )
                            return e;
                        let a = (g.isThread() && null != g.parent_id ? O.A.getChannel(g.parent_id) : null) ?? g;
                        return _.zy(D.cc({ user: s, context: a }), A.xBc.USE_EXTERNAL_EMOJIS)
                            ? e
                            : { ...e, emojis: [] };
                    },
                    [s, t, i, g],
                    r().isEqual,
                ))),
            l.useEffect(() => {
                c && I.default.track(A.HAw.TYPING_INDICATOR_STYLE_SEEN, { channel_id: g.id, channel_type: g.type });
            }, [c, g.id, g.type]),
            d),
        p = (0, Z.L)(g.id),
        G = {
            ...h,
            baseTextColor: (0, m.r)(o.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activeTextColor: (0, m.r)(o.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activityInviteEducationActivity: eI(g),
            typingUsers: f ? [] : N,
            customTypingIndicatorConfig: E,
            isFocused: (0, u.bG)([en.A], () => en.A.isFocused()),
            guildId: g.guild_id,
            channel: g,
            isThreadCreation: f,
        };
    return (0, n.jsx)(em, { ...G, shouldShowLegacyGameInviteCreationBanner: p });
}
