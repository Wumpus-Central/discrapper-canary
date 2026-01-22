n.d(t, {
    Ay: () => R,
    aW: () => M,
    rj: () => k,
}),
    n(321073),
    n(896048);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(735438),
    o = n.n(a),
    c = n(311907),
    d = n(827734),
    u = n(397927),
    h = n(657299),
    g = n(770178),
    m = n(84),
    p = n(587895),
    f = n(144945),
    v = n(912996),
    b = n(994500),
    A = n(461213),
    O = n(741961),
    x = n(287809),
    y = n(531685),
    j = n(954571),
    S = n(403362),
    C = n(562153),
    T = n(652215),
    w = n(985018),
    N = n(612986);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                P(e, t, n[t]);
            });
    }
    return e;
}
let I = [];
class _ extends s.PureComponent {
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
            -1 === I.indexOf(e) &&
            (j.default.track(T.HAw.SHOW_TUTORIAL, {
                tutorial: "activity-invite-nux-inline",
                application_id: e,
            }),
            I.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    render() {
        let { activity: e } = this.props;
        return (0, i.jsxs)("div", {
            className: l()(N.F4, { [N.gV]: this.state.fadeIn }),
            children: [
                (0, i.jsx)("div", { className: N.GZ }),
                (0, i.jsx)("span", {
                    children: w.intl.format(w.t["i/MoCt"], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation,
                    }),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            P(this, "state", { fadeIn: !1 }),
            P(this, "timeout", null),
            P(this, "handleDismissInviteEducation", () => {
                let { activity: e } = this.props;
                null != e && null != e.application_id && h.A.dismissForApplicationId(e.application_id);
            });
    }
}
function F(e) {
    let {
            activityInviteEducationActivity: t,
            isFocused: n,
            typingUsers: r,
            className: a,
            channel: o,
            isThreadCreation: c,
            renderDots: d,
            isInTextChannel: h = !1,
        } = e,
        { rateLimitPerUser: m } = o,
        p = s.useRef(null),
        v = s.useRef(null),
        [b, A] = s.useState(!1),
        O = s.useCallback(() => {
            if (null == p.current || null == v.current) return;
            let e = p.current.getBoundingClientRect();
            v.current.scrollWidth + 48 > e.width ? A(!0) : A(!1);
        }, []);
    if (((0, g.g)(p, O, [], { enabled: h }), (0, g.g)(v, O, [], { enabled: h }), 0 === r.length && !(m > 0)))
        return null != t
            ? (0, i.jsx)(_, {
                  activity: t,
                  isFocused: n,
              })
            : null;
    let [x, y, j] = r,
        S = "";
    1 === r.length
        ? (S = w.intl.format(w.t.lJ9sZX, { a: x }))
        : 2 === r.length
          ? (S = w.intl.format(w.t.rB0CUa, {
                a: x,
                b: y,
            }))
          : 3 === r.length
            ? (S = w.intl.format(w.t.StKThj, {
                  a: x,
                  b: y,
                  c: j,
              }))
            : r.length > 3 && (S = w.intl.format(w.t.Q8lUnE, {}));
    let C = b && r.length > 0 && r.length <= 3 ? w.intl.format(w.t["qD/0qZ"], {}) : S;
    return (0, i.jsxs)("div", {
        className: l()(
            N.IW,
            {
                "stop-animation": !n,
                [N.Il]: h,
            },
            a,
        ),
        children: [
            (0, i.jsxs)("div", {
                className: N.y5,
                ref: p,
                children: [
                    r.length > 0 &&
                        !1 !== d &&
                        (0, i.jsx)(u.nvX, {
                            className: N.gO,
                            dotRadius: 3.5,
                            themed: !0,
                        }),
                    (0, i.jsx)("span", {
                        className: N.Qq,
                        "aria-live": "polite",
                        "aria-atomic": !0,
                        children: C,
                    }),
                    (0, i.jsx)("span", {
                        className: N.Qq,
                        style: {
                            position: "absolute",
                            visibility: "hidden",
                        },
                        "aria-hidden": !0,
                        ref: v,
                        children: S,
                    }),
                ],
            }),
            (0, i.jsx)(f.A, {
                channel: o,
                isThreadCreation: c,
            }),
        ],
    });
}
function k(e) {
    let t = (0, c.bG)([O.A], () => O.A.getTypingUsers(e.id)),
        n = (0, c.bG)([x.default], () => x.default.getCurrentUser());
    return o()(t)
        .keys()
        .filter((e) => e !== (null == n ? void 0 : n.id))
        .reject((e) => b.A.isBlockedOrIgnored(e))
        .map((e) => x.default.getUser(e))
        .filter(S.Vq)
        .map((t) => C.Ay.getName(e.guild_id, e.id, t))
        .value();
}
function M(e) {
    let t = (0, c.bG)([A.A], () => A.A.findActivity((e) => null != e.application_id));
    return (0, c.bG)([v.A, p.A, b.A], () => (0, m.A)(e, t, v.A, p.A, b.A)) ? t : null;
}
function R(e) {
    var t, n;
    let { channel: s, isThreadCreation: r = !1 } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                s,
                r = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (s = 0, n = Reflect.ownKeys(e); s < n.length; s++)
                    (i = n[s]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
                return r;
            }
            if (
                ((r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        s = {},
                        r = Object.getOwnPropertyNames(e);
                    for (i = 0; i < r.length; i++)
                        (n = r[i]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                    return s;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
                    (i = n[s]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
            return r;
        })(e, ["channel", "isThreadCreation"]),
        a = k(s),
        o =
            ((t = E({}, l)),
            (n = n =
                {
                    baseTextColor: (0, u.rdh)(d.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                    activeTextColor: (0, u.rdh)(d.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                    activityInviteEducationActivity: M(s),
                    typingUsers: r ? [] : a,
                    isFocused: (0, c.bG)([y.A], () => y.A.isFocused()),
                    guildId: s.guild_id,
                    channel: s,
                    isThreadCreation: r,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t);
    return (0, i.jsx)(F, E({}, o));
}
