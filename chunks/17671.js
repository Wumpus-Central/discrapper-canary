t.d(n, { default: () => w });
var r = t(951288),
    i = t(647438),
    l = t(392711),
    a = t.n(l),
    c = t(442837),
    o = t(481060),
    s = t(45114),
    u = t(493773),
    d = t(313201),
    g = t(720202),
    p = t(430824),
    m = t(306680),
    h = t(626135),
    v = t(823379);
t(981888);
var j = t(709054),
    f = t(897285),
    b = t(518756),
    x = t(554747),
    O = t(710679),
    y = t(74562),
    C = t(576749),
    Z = t(765305),
    N = t(981631),
    P = t(490897),
    k = t(388032),
    E = t(520698);
function w(e) {
    let { transitionState: n, onClose: l, guildId: w } = e,
        I = (0, d.Dt)(),
        S = (0, c.e7)([p.Z], () => p.Z.getGuild(w)),
        D = (0, b.Z)(null == S ? void 0 : S.id),
        L = (0, x.ZP)(w),
        T = i.useRef(m.ZP.ackMessageId(w, P.W.GUILD_EVENT)),
        M = (0, C.Z)();
    return (
        i.useEffect(() => {
            L.forEach((e) => f.Z.getGuildEventUserCounts(w, e.id, [])), f.Z.getGuildEventsForCurrentUser(w);
        }, [L, w]),
        (0, u.ZP)(() => {
            h.default.track(N.rMx.OPEN_MODAL, {
                type: Z.zw,
                guild_id: w,
                guild_events_count: L.length,
            });
        }),
        i.useEffect(() => {
            a()(L)
                .map((e) => e.creator_id)
                .filter(v.lm)
                .uniq()
                .forEach((e) => {
                    g.Z.requestMember(w, e);
                });
        }, [w, L]),
        i.useEffect(() => {
            null != w && (0, s.Ju)(w, P.W.GUILD_EVENT);
        }, [w]),
        (0, r.jsxs)(o.Y0X, {
            size: o.CgR.MEDIUM,
            transitionState: n,
            "aria-labelledby": I,
            parentComponent: "GuildEventsModal",
            "data-migration-pending": !0,
            children: [
                (0, r.jsxs)(o.xBx, {
                    className: E.header,
                    "data-migration-pending": !0,
                    children: [
                        (0, r.jsx)(o.Que, {
                            size: "md",
                            color: "currentColor",
                            className: E.icon,
                        }),
                        (0, r.jsx)(o.Heading, {
                            id: I,
                            variant: "heading-md/semibold",
                            children:
                                L.length > 0
                                    ? k.intl.formatToPlainString(k.t.IBdqSu, { number: L.length })
                                    : k.intl.string(k.t.tlopTM),
                        }),
                        D &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: E.divider,
                                        children: "|",
                                    }),
                                    (0, r.jsx)(o.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: () => {
                                            (0, o.ZDy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    t.e("49049"),
                                                    t.e("36599"),
                                                    t.e("61"),
                                                    t.e("55324"),
                                                ]).then(t.bind(t, 779250));
                                                return (n) => {
                                                    var t, i;
                                                    return (0, r.jsx)(
                                                        e,
                                                        ((t = (function (e) {
                                                            for (var n = 1; n < arguments.length; n++) {
                                                                var t = null != arguments[n] ? arguments[n] : {},
                                                                    r = Object.keys(t);
                                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                                    (r = r.concat(
                                                                        Object.getOwnPropertySymbols(t).filter(
                                                                            function (e) {
                                                                                return Object.getOwnPropertyDescriptor(
                                                                                    t,
                                                                                    e,
                                                                                ).enumerable;
                                                                            },
                                                                        ),
                                                                    )),
                                                                    r.forEach(function (n) {
                                                                        var r;
                                                                        (r = t[n]),
                                                                            n in e
                                                                                ? Object.defineProperty(e, n, {
                                                                                      value: r,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0,
                                                                                  })
                                                                                : (e[n] = r);
                                                                    });
                                                            }
                                                            return e;
                                                        })({}, n)),
                                                        (i = i = { guildId: w }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(
                                                                  t,
                                                                  Object.getOwnPropertyDescriptors(i),
                                                              )
                                                            : (function (e, n) {
                                                                  var t = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      t.push.apply(t, r);
                                                                  }
                                                                  return t;
                                                              })(Object(i)).forEach(function (e) {
                                                                  Object.defineProperty(
                                                                      t,
                                                                      e,
                                                                      Object.getOwnPropertyDescriptor(i, e),
                                                                  );
                                                              }),
                                                        t),
                                                    );
                                                };
                                            }, M);
                                        },
                                        text: k.intl.string(k.t["60lJ0C"]),
                                    }),
                                ],
                            }),
                        (0, r.jsx)(o.P3F, {
                            onClick: l,
                            className: E.iconButton,
                            "aria-label": k.intl.string(k.t.cpT0Cq),
                            children: (0, r.jsx)(o.Dio, {
                                size: "md",
                                color: "currentColor",
                                className: E.icon,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(o.hzk, {
                    className: E.content,
                    "data-migration-pending": !0,
                    children:
                        L.length > 0
                            ? L.map((e) =>
                                  (0, r.jsx)(
                                      O.Z,
                                      {
                                          guildEvent: e,
                                          onActionTaken: l,
                                          isNew: null != T.current && j.default.compare(e.id, T.current) > 0,
                                      },
                                      e.id,
                                  ),
                              )
                            : (0, r.jsx)(y.Z, {
                                  guildId: w,
                                  onClose: l,
                              }),
                }),
            ],
        })
    );
}
