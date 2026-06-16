s.d(t, { default: () => L });
var a = s(627968),
    r = s(64700),
    i = s(189213),
    n = s(17928),
    l = s(834730),
    c = s(778712),
    d = s(821609),
    u = s(939249),
    o = s(892547),
    h = s(298990),
    m = s(966327),
    x = s(115718),
    j = s(47167),
    g = s(598104),
    A = s(255266),
    _ = s(72563),
    b = s(921955),
    p = s(71393),
    E = s(994500),
    v = s(625494),
    N = s(427262),
    C = s(652215),
    f = s(375708),
    S = s(231171);
let y = (e) => {
        let { channel: t, guildName: s } = e,
            r = (0, n.bG)([p.A], () => p.A.getGuild(t.guild_id)),
            i = (0, j.Ay)(t);
        return (0, a.jsxs)("div", {
            className: S.Ke,
            children: [
                (0, a.jsx)(A.A, { size: A.q.SMALL_32, guild: r, channel: t }),
                (0, a.jsxs)("div", {
                    className: S.D6,
                    children: [
                        (0, a.jsx)(l.E, { variant: "text-md/medium", children: i }),
                        (0, a.jsx)(l.E, { variant: "text-xs/normal", children: s }),
                    ],
                }),
            ],
        });
    },
    D = (e) => {
        let { channel: t } = e,
            s = (0, j.Ay)(t),
            r = (0, _.i)(t);
        return (0, a.jsxs)("div", {
            className: S.Ke,
            children: [
                (0, a.jsx)(g.A, { "aria-hidden": !0, size: c._3.SIZE_32, channel: t }),
                (0, a.jsxs)("div", {
                    className: S.D6,
                    children: [
                        (0, a.jsx)(l.E, { variant: "text-md/medium", children: s }),
                        (0, a.jsx)(l.E, { variant: "text-xs/normal", children: r }),
                    ],
                }),
            ],
        });
    },
    k = (e) => {
        let { user: t, status: s } = e,
            r = (0, n.bG)([E.A], () => E.A.getNickname(t.id)),
            i = N.Ay.useName(t),
            d = N.Ay.useUserTag(t);
        return (0, a.jsxs)("div", {
            className: S.Ke,
            children: [
                (0, a.jsx)(m.A, { "aria-hidden": !0, size: c._3.SIZE_32, user: t, status: s }),
                (0, a.jsxs)("div", {
                    className: S.D6,
                    children: [
                        (0, a.jsx)(l.E, { variant: "text-md/medium", children: r ?? i }),
                        (0, a.jsx)(l.E, { variant: "text-xs/normal", children: d }),
                    ],
                }),
            ],
        });
    };
class P extends r.Component {
    handleClick = () => {
        let { onInvite: e, row: t } = this.props;
        e(t);
    };
    render() {
        let e,
            t,
            { result: s, sending: r } = this.props;
        switch (s.type) {
            case x.rD.GROUP_DM:
                e = (0, a.jsx)(D, { channel: s.data.record });
                break;
            case x.rD.TEXT_CHANNEL: {
                let { categoryName: t, guildName: r } = s;
                e = (0, a.jsx)(y, { channel: s.data.record, categoryName: t, guildName: r });
                break;
            }
            case x.rD.USER: {
                let {
                    data: { comparator: t, record: r },
                    status: i,
                } = s;
                e = (0, a.jsx)(k, { comparator: t, user: r, status: i });
            }
        }
        return (
            (t = s.sent
                ? (0, a.jsx)(d.$, { variant: "secondary", text: f.intl.string(f.t.i6A1Xw), size: "sm", disabled: !0 })
                : (0, a.jsx)(d.$, {
                      variant: "secondary",
                      text: f.intl.string(f.t["6F9ivu"]),
                      size: "sm",
                      loading: r,
                  })),
            (0, a.jsxs)(u.D, { className: S.Nn, onClick: this.handleClick, children: [e, t] })
        );
    }
}
function L(e) {
    let { transitionState: t, onClose: s } = e,
        {
            results: l,
            query: c,
            activity: d,
        } = (0, n.cf)(
            [b.A],
            () => ({ results: b.A.getResults(), query: b.A.getQuery(), activity: b.A.getActivity() }),
            [],
        ),
        [u, m] = r.useState(c),
        [j, g] = r.useState([]),
        [A, _] = r.useState(!1),
        p = r.useRef(null),
        E = r.useCallback(() => {
            p.current?.scrollPageUp({ animate: !0 });
        }, [p]),
        N = r.useCallback(() => {
            p.current?.scrollPageDown({ animate: !0 });
        }, [p]);
    r.useEffect(
        () => (
            v._.subscribe(C.jej.SCROLL_PAGE_UP, E),
            () => {
                v._.unsubscribe(C.jej.SCROLL_PAGE_UP, E);
            }
        ),
        [E],
    ),
        r.useEffect(
            () => (
                v._.subscribe(C.jej.SCROLL_PAGE_DOWN, N),
                () => {
                    v._.unsubscribe(C.jej.SCROLL_PAGE_DOWN, N);
                }
            ),
            [N],
        ),
        r.useEffect(() => {
            null == d && s();
        }, [s, d]),
        r.useEffect(() => {
            p.current?.scrollToTop();
        }, [p, l]);
    let y = r.useCallback(
            (e) => {
                let {
                    data: t,
                    data: {
                        record: { id: s },
                    },
                } = l[e];
                if (!(null == s || j.includes(s)))
                    switch ((g([...j, s]), t.type)) {
                        case x.rD.GROUP_DM:
                        case x.rD.TEXT_CHANNEL:
                            (0, h.b4)(t.record.id);
                            break;
                        case x.rD.USER:
                            (0, h.Jb)(t.record.id);
                    }
            },
            [l, j],
        ),
        D = (e) => {
            m(e), (0, h.oR)(e);
        };
    return null == d
        ? null
        : (0, a.jsx)(i.Modal, {
              transitionState: t,
              title: f.intl.formatToPlainString(f.t["2tN7ih"], { name: d.name }),
              onClose: s,
              actions: [],
              input: (0, a.jsx)(o.I, {
                  query: u,
                  onChange: D,
                  placeholder: f.intl.string(f.t["5h0QOP"]),
                  autoFocus: !0,
                  onClear: () => {
                      D("");
                  },
              }),
              size: "md",
              "aria-label": f.intl.formatToPlainString(f.t["2tN7ih"], { name: d.name }),
              listProps:
                  l.length > 0
                      ? {
                            ref: p,
                            paddingBottom: 12,
                            sections: [l.length],
                            sectionHeight: 0,
                            renderSection: C.FXj,
                            rowHeight: (e, t) => (e > 0 ? 0 : 48 * (null != l[t])),
                            renderRow: (e) => {
                                let { section: t, row: s } = e;
                                if (t > 0) return null;
                                let r = l[s];
                                return null == r
                                    ? null
                                    : (0, a.jsx)(
                                          P,
                                          {
                                              row: s,
                                              result: r,
                                              sending: null != r.data.record.id && j.includes(r.data.record.id),
                                              onInvite: y,
                                          },
                                          r.data.record.id,
                                      );
                            },
                            onScroll: (e) => {
                                let t = e.currentTarget.scrollTop > 0;
                                A !== t && _(t);
                            },
                        }
                      : void 0,
              children: 0 === l.length && (0, a.jsx)("div", { className: S.wV }),
          });
}
