n.d(t, { aW: () => K, Ay: () => Q, rj: () => X }), n(321073);
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(735438),
    o = n.n(s),
    c = n(17928),
    d = n(661531),
    u = n(863610),
    m = n(602853),
    _ = n(228366),
    h = n(954571),
    p = n(652215);
let g = {
    dismissForApplicationId(e) {
        _.h.dispatch({ type: "ACTIVITY_INVITE_EDUCATION_DISMISS", key: e, value: !0 }),
            h.default.track(p.HAw.CLOSE_TUTORIAL, {
                tutorial: "activity-invite-nux-inline",
                application_id: e,
                acknowledged: !0,
            });
    },
};
var f = n(770178),
    A = n(20015),
    b = n(833349),
    T = n(587895),
    I = n(989349),
    E = n.n(I),
    C = n(990078),
    S = n(834730),
    y = n(291747),
    x = n(927813),
    v = n(985018),
    O = n(101392),
    N = n(625494),
    w = n(960850),
    M = n(743586);
function R(e) {
    let t,
        { isEnabled: n, rateLimitPerUser: l, isBypassSlowmode: r, slowmodeCooldownGuess: s } = e,
        [o, c] = i.useState(!1);
    if (
        (i.useEffect(() => {
            function e() {
                c(!0),
                    setTimeout(() => {
                        c(!1);
                    }, 1e3);
            }
            return (
                N._.subscribe(p.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e),
                () => {
                    N._.unsubscribe(p.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e);
                }
            );
        }, []),
        !n)
    )
        return null;
    let d = (function (e) {
        if (e >= x.A.Seconds.HOUR) {
            let t = Math.floor(e / x.A.Seconds.HOUR),
                n = Math.floor((e - t * x.A.Seconds.HOUR) / x.A.Seconds.MINUTE),
                a = e - t * x.A.Seconds.HOUR - n * x.A.Seconds.MINUTE;
            return v.intl.formatToPlainString(v.t["3hz51F"], { hours: t, minutes: n, seconds: a });
        }
        if (!(e >= 60)) return v.intl.formatToPlainString(v.t.IWntYg, { seconds: e });
        {
            let t = Math.floor(e / 60);
            return v.intl.formatToPlainString(v.t.sY3wlG, { minutes: t, seconds: e - 60 * t });
        }
    })(l);
    if (!r && s > 0) {
        let e = E().duration(s);
        if (s > x.A.Millis.HOUR) {
            let n = `${e.minutes()}`.padStart(2, "0"),
                a = `${e.seconds()}`.padStart(2, "0");
            t = `${e.hours()}:${n}:${a}`;
        } else {
            let n = `${e.seconds()}`.padStart(2, "0");
            t = `${e.minutes()}:${n}`;
        }
    } else t = r ? v.intl.string(v.t["8+NidX"]) : v.intl.string(v.t.Icu3bf);
    let u = (0, a.jsxs)(S.E, {
        className: M.rk,
        variant: "text-xs/medium",
        color: o ? "text-feedback-critical" : "text-muted",
        tabularNumbers: !0,
        children: [(0, a.jsx)(y.x, { size: "xxs", color: "currentColor", className: M.Eq }), t],
    });
    return (0, a.jsx)(C.m, { text: d, children: (0, a.jsx)("div", { className: M.ns, children: u }) });
}
function L(e) {
    let { channel: t, isThreadCreation: n = !1 } = e,
        i = (0, c.bG)([O.A], () => O.A.getSlowmodeCooldownGuess(t.id, n ? O.R.CreateThread : O.R.SendMessage)),
        l = (0, w._)(t, n ? O.R.CreateThread : O.R.SendMessage),
        { rateLimitPerUser: r } = t;
    return (0, a.jsx)(R, { isEnabled: r > 0, rateLimitPerUser: r, isBypassSlowmode: l, slowmodeCooldownGuess: i });
}
let j = {};
class k extends c.Ay.PersistedStore {
    static displayName = "ActivityInviteEducationStore";
    static persistKey = "ActivityInviteEducationExperimentStore";
    initialize(e) {
        Object.assign(j, e);
    }
    getState() {
        return j;
    }
    shouldShowEducation(e) {
        return !0 !== j[e];
    }
}
let D = new k(_.h, {
    ACTIVITY_INVITE_EDUCATION_DISMISS: function (e) {
        return (j[e.key] = e.value), !0;
    },
});
var F = n(629016),
    P = n(994500),
    G = n(461213),
    U = n(741961),
    H = n(287809),
    B = n(531685),
    V = n(403362),
    z = n(562153),
    $ = n(323837);
let W = [];
class J extends i.PureComponent {
    state = { fadeIn: !1 };
    timeout = null;
    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({ fadeIn: !0 }), (this.timeout = null), this.logShownEventIfNeeded();
        }, 100);
    }
    componentDidUpdate() {
        this.logShownEventIfNeeded();
    }
    logShownEventIfNeeded() {
        let e = this.props.activity.application_id;
        null != e &&
            -1 === W.indexOf(e) &&
            (h.default.track(p.HAw.SHOW_TUTORIAL, { tutorial: "activity-invite-nux-inline", application_id: e }),
            W.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    handleDismissInviteEducation = () => {
        let { activity: e } = this.props;
        null != e && null != e.application_id && g.dismissForApplicationId(e.application_id);
    };
    render() {
        let { activity: e } = this.props;
        return (0, a.jsxs)("div", {
            className: r()($.F4, { [$.gV]: this.state.fadeIn }),
            children: [
                (0, a.jsx)("div", { className: $.GZ }),
                (0, a.jsx)("span", {
                    children: v.intl.format(v.t["i/MoCt"], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation,
                    }),
                }),
            ],
        });
    }
}
function Z(e) {
    let {
            activityInviteEducationActivity: t,
            isFocused: n,
            typingUsers: l,
            className: s,
            channel: o,
            isThreadCreation: c,
            renderDots: d,
            isInTextChannel: m = !1,
        } = e,
        { rateLimitPerUser: _ } = o,
        h = i.useRef(null),
        p = i.useRef(null),
        [g, A] = i.useState(!1),
        b = i.useCallback(() => {
            if (null == h.current || null == p.current) return;
            let e = h.current.getBoundingClientRect();
            p.current.scrollWidth + 48 > e.width ? A(!0) : A(!1);
        }, []);
    if (((0, f.g)(h, b, [], { enabled: m }), (0, f.g)(p, b, [], { enabled: m }), 0 === l.length && !(_ > 0)))
        return null != t ? (0, a.jsx)(J, { activity: t, isFocused: n }) : null;
    let [T, I, E] = l,
        C = "";
    1 === l.length
        ? (C = v.intl.format(v.t.lJ9sZX, { a: T }))
        : 2 === l.length
          ? (C = v.intl.format(v.t.rB0CUa, { a: T, b: I }))
          : 3 === l.length
            ? (C = v.intl.format(v.t.StKThj, { a: T, b: I, c: E }))
            : l.length > 3 && (C = v.intl.format(v.t.Q8lUnE, {}));
    let S = g && l.length > 0 && l.length <= 3 ? v.intl.format(v.t["qD/0qZ"], {}) : C;
    return (0, a.jsxs)("div", {
        className: r()($.IW, { "stop-animation": !n, [$.Il]: m }, s),
        children: [
            (0, a.jsxs)("div", {
                className: $.y5,
                ref: h,
                children: [
                    l.length > 0 && !1 !== d && (0, a.jsx)(u.n, { className: $.gO, dotRadius: 3.5, themed: !0 }),
                    (0, a.jsx)("span", { className: $.Qq, "aria-live": "polite", "aria-atomic": !0, children: S }),
                    (0, a.jsx)("span", {
                        className: $.Qq,
                        style: { position: "absolute", visibility: "hidden" },
                        "aria-hidden": !0,
                        ref: p,
                        children: C,
                    }),
                ],
            }),
            (0, a.jsx)(L, { channel: o, isThreadCreation: c }),
        ],
    });
}
function X(e) {
    let t = (0, c.bG)([U.A], () => U.A.getTypingUsers(e.id)),
        n = (0, c.bG)([H.default], () => H.default.getCurrentUser());
    return o()(t)
        .keys()
        .filter((e) => e !== n?.id)
        .reject((e) => P.A.isBlockedOrIgnored(e))
        .map((e) => H.default.getUser(e))
        .filter(V.Vq)
        .map((t) => z.Ay.getName(e.guild_id, e.id, t))
        .value();
}
function K(e) {
    let t = (0, c.bG)([G.A], () => G.A.findActivity((e) => null != e.application_id));
    return (0, c.bG)([D, T.A, P.A, F.A], () =>
        (function (e) {
            let {
                    channel: t,
                    activity: n,
                    ActivityInviteEducationStore: a,
                    ApplicationStore: i,
                    RelationshipStore: l,
                    GamePartyStore: r,
                } = e,
                s = n?.application_id;
            if (null == t || null == n || !(0, b.A)(n, p.jUm.JOIN) || null == s) return !1;
            let o = i.getApplication(s);
            return (
                !(
                    null == o ||
                    (0, A.n)(o, p.gfo.EMBEDDED) ||
                    (t.isPrivate() && l.isBlockedOrIgnored(t.getRecipientId())) ||
                    (t.isDM() && r.getParty(n.party?.id)?.has(t.getRecipientId()) === !0)
                ) && a.shouldShowEducation(s)
            );
        })({
            channel: e,
            activity: t,
            ActivityInviteEducationStore: D,
            ApplicationStore: T.A,
            RelationshipStore: P.A,
            GamePartyStore: F.A,
        }),
    )
        ? t
        : null;
}
function Q(e) {
    let { channel: t, isThreadCreation: n = !1, ...i } = e,
        l = X(t),
        r = {
            ...i,
            baseTextColor: (0, m.r)(d.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activeTextColor: (0, m.r)(d.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
            activityInviteEducationActivity: K(t),
            typingUsers: n ? [] : l,
            isFocused: (0, c.bG)([B.A], () => B.A.isFocused()),
            guildId: t.guild_id,
            channel: t,
            isThreadCreation: n,
        };
    return (0, a.jsx)(Z, { ...r });
}
