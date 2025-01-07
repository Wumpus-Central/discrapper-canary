t.r(e),
    t.d(e, {
        __import__useLazyAPIPromise: function () {
            return L;
        },
        default: function () {
            return S;
        }
    });
var i = t(200651),
    l = t(192379),
    r = t(392711),
    a = t.n(r),
    o = t(442837),
    c = t(481060),
    s = t(45114),
    u = t(493773),
    d = t(313201),
    g = t(597),
    h = t(147754),
    v = t(984933),
    m = t(720202),
    x = t(430824),
    Z = t(306680),
    f = t(626135),
    C = t(823379),
    p = t(981888),
    N = t(709054),
    j = t(897285),
    E = t(518756),
    k = t(554747),
    I = t(710679),
    _ = t(74562),
    P = t(576749),
    T = t(765305),
    y = t(981631),
    b = t(490897),
    G = t(388032),
    M = t(984226);
let L = p.Z;
function S(n) {
    let { transitionState: e, onClose: r, guildId: p } = n,
        L = (0, d.Dt)(),
        S = (0, o.e7)([x.Z], () => x.Z.getGuild(p)),
        A = (0, E.Z)(null == S ? void 0 : S.id),
        R = (0, k.ZP)(p),
        w = l.useRef(Z.ZP.ackMessageId(p, b.W.GUILD_EVENT)),
        D = (0, P.Z)();
    return (
        l.useEffect(() => {
            R.forEach((n) => j.Z.getGuildEventUserCounts(p, n.id, [])), j.Z.getGuildEventsForCurrentUser(p);
        }, [R, p]),
        l.useEffect(() => {
            let n = x.Z.getGuild(p);
            if (!(null == n ? void 0 : n.hasFeature(y.oNc.HUB))) return;
            let { showHubEventsList: e } = h.Z.getCurrentConfig({
                guildId: p,
                location: 'd3755f_1'
            });
            if (!e) return;
            let t = v.ZP.getDefaultChannel(p);
            null != t && g.c(t.id);
        }, [p]),
        (0, u.Z)(() => {
            f.default.track(y.rMx.OPEN_MODAL, {
                type: T.zw,
                guild_id: p,
                guild_events_count: R.length
            });
        }),
        l.useEffect(() => {
            a()(R)
                .map((n) => n.creator_id)
                .filter(C.lm)
                .uniq()
                .forEach((n) => {
                    m.Z.requestMember(p, n);
                });
        }, [p, R]),
        l.useEffect(() => {
            null != p && (0, s.Ju)(p, b.W.GUILD_EVENT);
        }, [p]),
        (0, i.jsxs)(c.ModalRoot, {
            size: c.ModalSize.MEDIUM,
            transitionState: e,
            'aria-labelledby': L,
            children: [
                (0, i.jsxs)(c.ModalHeader, {
                    className: M.header,
                    children: [
                        (0, i.jsx)(c.CalendarIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: M.icon
                        }),
                        (0, i.jsx)(c.Heading, {
                            id: L,
                            variant: 'heading-md/semibold',
                            children: R.length > 0 ? G.intl.formatToPlainString(G.t.IBdqSk, { number: R.length }) : G.intl.string(G.t.tlopTE)
                        }),
                        A &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', {
                                        className: M.divider,
                                        children: '|'
                                    }),
                                    (0, i.jsx)(c.Button, {
                                        size: c.Button.Sizes.MIN,
                                        onClick: () => {
                                            (0, c.openModalLazy)(async () => {
                                                let { default: n } = await Promise.all([t.e('58023'), t.e('14582')]).then(t.bind(t, 779250));
                                                return (e) =>
                                                    (0, i.jsx)(n, {
                                                        ...e,
                                                        guildId: p
                                                    });
                                            }, D);
                                        },
                                        innerClassName: M.button,
                                        children: G.intl.string(G.t['60lJ0N'])
                                    })
                                ]
                            }),
                        (0, i.jsx)(c.Clickable, {
                            onClick: r,
                            className: M.iconButton,
                            'aria-label': G.intl.string(G.t.cpT0Cg),
                            children: (0, i.jsx)(c.XSmallIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: M.icon
                            })
                        })
                    ]
                }),
                (0, i.jsx)(c.ModalContent, {
                    className: M.content,
                    children:
                        R.length > 0
                            ? R.map((n) =>
                                  (0, i.jsx)(
                                      I.Z,
                                      {
                                          guildEvent: n,
                                          guildId: p,
                                          onActionTaken: r,
                                          isNew: null != w.current && N.default.compare(n.id, w.current) > 0
                                      },
                                      n.id
                                  )
                              )
                            : (0, i.jsx)(_.Z, {
                                  guildId: p,
                                  onClose: r
                              })
                })
            ]
        })
    );
}
