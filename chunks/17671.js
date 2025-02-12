i.d(n, { default: () => S });
var t = i(200651),
    l = i(192379),
    a = i(392711),
    r = i.n(a),
    o = i(442837),
    s = i(481060),
    c = i(45114),
    d = i(493773),
    u = i(313201),
    g = i(597),
    h = i(147754),
    v = i(984933),
    x = i(720202),
    Z = i(430824),
    m = i(306680),
    C = i(626135),
    f = i(823379);
i(981888);
var p = i(709054),
    N = i(897285),
    j = i(518756),
    E = i(554747),
    k = i(710679),
    I = i(74562),
    P = i(576749),
    T = i(765305),
    _ = i(981631),
    y = i(490897),
    G = i(388032),
    b = i(485315);
function S(e) {
    let { transitionState: n, onClose: a, guildId: S } = e,
        L = (0, u.Dt)(),
        D = (0, o.e7)([Z.Z], () => Z.Z.getGuild(S)),
        R = (0, j.Z)(null == D ? void 0 : D.id),
        w = (0, E.ZP)(S),
        M = l.useRef(m.ZP.ackMessageId(S, y.W.GUILD_EVENT)),
        U = (0, P.Z)();
    return (
        l.useEffect(() => {
            w.forEach((e) => N.Z.getGuildEventUserCounts(S, e.id, [])), N.Z.getGuildEventsForCurrentUser(S);
        }, [w, S]),
        l.useEffect(() => {
            let e = Z.Z.getGuild(S);
            if (!(null == e ? void 0 : e.hasFeature(_.oNc.HUB))) return;
            let { showHubEventsList: n } = h.Z.getCurrentConfig({
                guildId: S,
                location: 'd3755f_1'
            });
            if (!n) return;
            let i = v.ZP.getDefaultChannel(S);
            null != i && g.c(i.id);
        }, [S]),
        (0, d.ZP)(() => {
            C.default.track(_.rMx.OPEN_MODAL, {
                type: T.zw,
                guild_id: S,
                guild_events_count: w.length
            });
        }),
        l.useEffect(() => {
            r()(w)
                .map((e) => e.creator_id)
                .filter(f.lm)
                .uniq()
                .forEach((e) => {
                    x.Z.requestMember(S, e);
                });
        }, [S, w]),
        l.useEffect(() => {
            null != S && (0, c.Ju)(S, y.W.GUILD_EVENT);
        }, [S]),
        (0, t.jsxs)(s.Y0X, {
            size: s.CgR.MEDIUM,
            transitionState: n,
            'aria-labelledby': L,
            children: [
                (0, t.jsxs)(s.xBx, {
                    className: b.header,
                    children: [
                        (0, t.jsx)(s.Que, {
                            size: 'md',
                            color: 'currentColor',
                            className: b.icon
                        }),
                        (0, t.jsx)(s.X6q, {
                            id: L,
                            variant: 'heading-md/semibold',
                            children: w.length > 0 ? G.intl.formatToPlainString(G.t.IBdqSk, { number: w.length }) : G.intl.string(G.t.tlopTE)
                        }),
                        R &&
                            (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)('div', {
                                        className: b.divider,
                                        children: '|'
                                    }),
                                    (0, t.jsx)(s.zxk, {
                                        size: s.zxk.Sizes.MIN,
                                        onClick: () => {
                                            (0, s.ZDy)(async () => {
                                                let { default: e } = await Promise.all([i.e('58023'), i.e('94909')]).then(i.bind(i, 779250));
                                                return (n) =>
                                                    (0, t.jsx)(e, {
                                                        ...n,
                                                        guildId: S
                                                    });
                                            }, U);
                                        },
                                        innerClassName: b.button,
                                        children: G.intl.string(G.t['60lJ0N'])
                                    })
                                ]
                            }),
                        (0, t.jsx)(s.P3F, {
                            onClick: a,
                            className: b.iconButton,
                            'aria-label': G.intl.string(G.t.cpT0Cg),
                            children: (0, t.jsx)(s.Dio, {
                                size: 'md',
                                color: 'currentColor',
                                className: b.icon
                            })
                        })
                    ]
                }),
                (0, t.jsx)(s.hzk, {
                    className: b.content,
                    children:
                        w.length > 0
                            ? w.map((e) =>
                                  (0, t.jsx)(
                                      k.Z,
                                      {
                                          guildEvent: e,
                                          guildId: S,
                                          onActionTaken: a,
                                          isNew: null != M.current && p.default.compare(e.id, M.current) > 0
                                      },
                                      e.id
                                  )
                              )
                            : (0, t.jsx)(I.Z, {
                                  guildId: S,
                                  onClose: a
                              })
                })
            ]
        })
    );
}
