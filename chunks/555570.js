r.d(t, { default: () => T });
var l = r(627968),
    n = r(64700),
    s = r(189213),
    i = r(17928),
    a = r(834730),
    c = r(778712),
    u = r(821609),
    d = r(939249),
    o = r(892547),
    h = r(298990),
    m = r(966327),
    _ = r(115718),
    g = r(47167),
    f = r(598104),
    x = r(255266),
    j = r(72563),
    A = r(921955),
    p = r(71393),
    N = r(994500),
    v = r(625494),
    S = r(427262),
    E = r(652215),
    b = r(985018),
    L = r(231171);
let y = (e) => {
        let { channel: t, guildName: r } = e,
            n = (0, i.bG)([p.A], () => p.A.getGuild(t.guild_id)),
            s = (0, g.Ay)(t);
        return (0, l.jsxs)("div", {
            className: L.Ke,
            children: [
                (0, l.jsx)(x.A, { size: x.q.SMALL_32, guild: n, channel: t }),
                (0, l.jsxs)("div", {
                    className: L.D6,
                    children: [
                        (0, l.jsx)(a.E, { variant: "text-md/medium", children: s }),
                        (0, l.jsx)(a.E, { variant: "text-xs/normal", children: r }),
                    ],
                }),
            ],
        });
    },
    C = (e) => {
        let { channel: t } = e,
            r = (0, g.Ay)(t),
            n = (0, j.i)(t);
        return (0, l.jsxs)("div", {
            className: L.Ke,
            children: [
                (0, l.jsx)(f.A, { "aria-hidden": !0, size: c._3.SIZE_32, channel: t }),
                (0, l.jsxs)("div", {
                    className: L.D6,
                    children: [
                        (0, l.jsx)(a.E, { variant: "text-md/medium", children: r }),
                        (0, l.jsx)(a.E, { variant: "text-xs/normal", children: n }),
                    ],
                }),
            ],
        });
    },
    P = (e) => {
        let { user: t, status: r } = e,
            n = (0, i.bG)([N.A], () => N.A.getNickname(t.id)),
            s = S.Ay.useName(t),
            u = S.Ay.useUserTag(t);
        return (0, l.jsxs)("div", {
            className: L.Ke,
            children: [
                (0, l.jsx)(m.A, { "aria-hidden": !0, size: c._3.SIZE_32, user: t, status: r }),
                (0, l.jsxs)("div", {
                    className: L.D6,
                    children: [
                        (0, l.jsx)(a.E, { variant: "text-md/medium", children: n ?? s }),
                        (0, l.jsx)(a.E, { variant: "text-xs/normal", children: u }),
                    ],
                }),
            ],
        });
    };
class D extends n.Component {
    handleClick = () => {
        let { onInvite: e, row: t } = this.props;
        e(t);
    };
    render() {
        let e,
            t,
            { result: r, sending: n } = this.props;
        switch (r.type) {
            case _.rD.GROUP_DM:
                e = (0, l.jsx)(C, { channel: r.data.record });
                break;
            case _.rD.TEXT_CHANNEL: {
                let { categoryName: t, guildName: n } = r;
                e = (0, l.jsx)(y, { channel: r.data.record, categoryName: t, guildName: n });
                break;
            }
            case _.rD.USER: {
                let {
                    data: { comparator: t, record: n },
                    status: s,
                } = r;
                e = (0, l.jsx)(P, { comparator: t, user: n, status: s });
            }
        }
        return (
            (t = r.sent
                ? (0, l.jsx)(u.$, { variant: "secondary", text: b.intl.string(b.t.i6A1Xw), size: "sm", disabled: !0 })
                : (0, l.jsx)(u.$, {
                      variant: "secondary",
                      text: b.intl.string(b.t["6F9ivu"]),
                      size: "sm",
                      loading: n,
                  })),
            (0, l.jsxs)(d.D, { className: L.Nn, onClick: this.handleClick, children: [e, t] })
        );
    }
}
function T(e) {
    let { transitionState: t, onClose: r } = e,
        {
            results: a,
            query: c,
            activity: u,
        } = (0, i.cf)(
            [A.A],
            () => ({ results: A.A.getResults(), query: A.A.getQuery(), activity: A.A.getActivity() }),
            [],
        ),
        [d, m] = n.useState(c),
        [g, f] = n.useState([]),
        [x, j] = n.useState(!1),
        p = n.useRef(null),
        N = n.useCallback(() => {
            p.current?.scrollPageUp({ animate: !0 });
        }, [p]),
        S = n.useCallback(() => {
            p.current?.scrollPageDown({ animate: !0 });
        }, [p]);
    n.useEffect(
        () => (
            v._.subscribe(E.jej.SCROLL_PAGE_UP, N),
            () => {
                v._.unsubscribe(E.jej.SCROLL_PAGE_UP, N);
            }
        ),
        [N],
    ),
        n.useEffect(
            () => (
                v._.subscribe(E.jej.SCROLL_PAGE_DOWN, S),
                () => {
                    v._.unsubscribe(E.jej.SCROLL_PAGE_DOWN, S);
                }
            ),
            [S],
        ),
        n.useEffect(() => {
            null == u && r();
        }, [r, u]),
        n.useEffect(() => {
            p.current?.scrollToTop();
        }, [p, a]);
    let y = n.useCallback(
            (e) => {
                let {
                    data: t,
                    data: {
                        record: { id: r },
                    },
                } = a[e];
                if (!(null == r || g.includes(r)))
                    switch ((f([...g, r]), t.type)) {
                        case _.rD.GROUP_DM:
                        case _.rD.TEXT_CHANNEL:
                            (0, h.b4)(t.record.id);
                            break;
                        case _.rD.USER:
                            (0, h.Jb)(t.record.id);
                    }
            },
            [a, g],
        ),
        C = (e) => {
            m(e), (0, h.oR)(e);
        };
    return null == u
        ? null
        : (0, l.jsx)(s.Modal, {
              transitionState: t,
              title: b.intl.formatToPlainString(b.t["2tN7ih"], { name: u.name }),
              onClose: r,
              actions: [],
              input: (0, l.jsx)(o.I, {
                  query: d,
                  onChange: C,
                  placeholder: b.intl.string(b.t["5h0QOP"]),
                  autoFocus: !0,
                  onClear: () => {
                      C("");
                  },
              }),
              size: "md",
              "aria-label": b.intl.formatToPlainString(b.t["2tN7ih"], { name: u.name }),
              listProps:
                  a.length > 0
                      ? {
                            ref: p,
                            paddingBottom: 12,
                            sections: [a.length],
                            sectionHeight: 0,
                            renderSection: E.FXj,
                            rowHeight: (e, t) => (e > 0 ? 0 : 48 * (null != a[t])),
                            renderRow: (e) => {
                                let { section: t, row: r } = e;
                                if (t > 0) return null;
                                let n = a[r];
                                return null == n
                                    ? null
                                    : (0, l.jsx)(
                                          D,
                                          {
                                              row: r,
                                              result: n,
                                              sending: null != n.data.record.id && g.includes(n.data.record.id),
                                              onInvite: y,
                                          },
                                          n.data.record.id,
                                      );
                            },
                            onScroll: (e) => {
                                let t = e.currentTarget.scrollTop > 0;
                                x !== t && j(t);
                            },
                        }
                      : void 0,
              children: 0 === a.length && (0, l.jsx)("div", { className: L.wV }),
          });
}
