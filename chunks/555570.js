r.d(t, { default: () => C });
var s = r(627968),
    n = r(64700),
    i = r(158954),
    l = r(311907),
    a = r(397927),
    u = r(298990),
    c = r(966327),
    d = r(629357),
    o = r(47167),
    h = r(598104),
    m = r(255266),
    x = r(72563),
    f = r(921955),
    g = r(71393),
    _ = r(994500),
    j = r(203982),
    p = r(427262),
    A = r(652215),
    v = r(985018),
    b = r(129348);
let N = (e) => {
        let { channel: t, guildName: r } = e,
            n = (0, l.bG)([g.A], () => g.A.getGuild(t.guild_id)),
            i = (0, o.Ay)(t);
        return (0, s.jsxs)("div", {
            className: b.Ke,
            children: [
                (0, s.jsx)(m.A, { size: m.q.SMALL_32, guild: n, channel: t }),
                (0, s.jsxs)("div", {
                    className: b.D6,
                    children: [
                        (0, s.jsx)(a.Text, { variant: "text-md/medium", children: i }),
                        (0, s.jsx)(a.Text, { variant: "text-xs/normal", children: r }),
                    ],
                }),
            ],
        });
    },
    T = (e) => {
        let { channel: t } = e,
            r = (0, o.Ay)(t),
            n = (0, x.i)(t);
        return (0, s.jsxs)("div", {
            className: b.Ke,
            children: [
                (0, s.jsx)(h.A, { "aria-hidden": !0, size: a._3J.SIZE_32, channel: t }),
                (0, s.jsxs)("div", {
                    className: b.D6,
                    children: [
                        (0, s.jsx)(a.Text, { variant: "text-md/medium", children: r }),
                        (0, s.jsx)(a.Text, { variant: "text-xs/normal", children: n }),
                    ],
                }),
            ],
        });
    },
    S = (e) => {
        let { user: t, status: r } = e,
            n = (0, l.bG)([_.A], () => _.A.getNickname(t.id)),
            i = p.Ay.useName(t),
            u = p.Ay.useUserTag(t);
        return (0, s.jsxs)("div", {
            className: b.Ke,
            children: [
                (0, s.jsx)(c.A, { "aria-hidden": !0, size: a._3J.SIZE_32, user: t, status: r }),
                (0, s.jsxs)("div", {
                    className: b.D6,
                    children: [
                        (0, s.jsx)(a.Text, { variant: "text-md/medium", children: n ?? i }),
                        (0, s.jsx)(a.Text, { variant: "text-xs/normal", children: u }),
                    ],
                }),
            ],
        });
    };
class P extends n.Component {
    handleClick = () => {
        let { onInvite: e, row: t } = this.props;
        e(t);
    };
    render() {
        let e,
            t,
            { result: r, sending: n } = this.props;
        switch (r.type) {
            case d.rD.GROUP_DM:
                e = (0, s.jsx)(T, { channel: r.data.record });
                break;
            case d.rD.TEXT_CHANNEL: {
                let { categoryName: t, guildName: n } = r;
                e = (0, s.jsx)(N, { channel: r.data.record, categoryName: t, guildName: n });
                break;
            }
            case d.rD.USER: {
                let {
                    data: { comparator: t, record: n },
                    status: i,
                } = r;
                e = (0, s.jsx)(S, { comparator: t, user: n, status: i });
            }
        }
        return (
            (t = r.sent
                ? (0, s.jsx)(a.Button, {
                      variant: "secondary",
                      text: v.intl.string(v.t.i6A1Xw),
                      size: "sm",
                      disabled: !0,
                  })
                : (0, s.jsx)(a.Button, {
                      variant: "secondary",
                      text: v.intl.string(v.t["6F9ivu"]),
                      size: "sm",
                      loading: n,
                  })),
            (0, s.jsxs)(a.DUT, { className: b.Nn, onClick: this.handleClick, children: [e, t] })
        );
    }
}
function C(e) {
    let { transitionState: t, onClose: r } = e,
        {
            results: c,
            query: o,
            activity: h,
        } = (0, l.cf)(
            [f.A],
            () => ({ results: f.A.getResults(), query: f.A.getQuery(), activity: f.A.getActivity() }),
            [],
        ),
        [m, x] = n.useState(o),
        [g, _] = n.useState([]),
        [p, N] = n.useState(!1),
        T = n.useRef(null),
        S = n.useCallback(() => {
            T.current?.scrollPageUp({ animate: !0 });
        }, [T]),
        C = n.useCallback(() => {
            T.current?.scrollPageDown({ animate: !0 });
        }, [T]);
    n.useEffect(
        () => (
            j._.subscribe(A.jej.SCROLL_PAGE_UP, S),
            () => {
                j._.unsubscribe(A.jej.SCROLL_PAGE_UP, S);
            }
        ),
        [S],
    ),
        n.useEffect(
            () => (
                j._.subscribe(A.jej.SCROLL_PAGE_DOWN, C),
                () => {
                    j._.unsubscribe(A.jej.SCROLL_PAGE_DOWN, C);
                }
            ),
            [C],
        ),
        n.useEffect(() => {
            null == h && r();
        }, [r, h]),
        n.useEffect(() => {
            T.current?.scrollToTop();
        }, [T, c]);
    let y = n.useCallback(
            (e) => {
                let {
                    data: t,
                    data: {
                        record: { id: r },
                    },
                } = c[e];
                if (!(null == r || g.includes(r)))
                    switch ((_([...g, r]), t.type)) {
                        case d.rD.GROUP_DM:
                        case d.rD.TEXT_CHANNEL:
                            (0, u.b4)(t.record.id);
                            break;
                        case d.rD.USER:
                            (0, u.Jb)(t.record.id);
                    }
            },
            [c, g],
        ),
        D = (e) => {
            x(e), (0, u.oR)(e);
        };
    return null == h
        ? null
        : (0, s.jsx)(i.Modal, {
              transitionState: t,
              title: v.intl.formatToPlainString(v.t["2tN7ih"], { name: h.name }),
              onClose: r,
              actions: [],
              input: (0, s.jsx)(a.IWV, {
                  query: m,
                  onChange: D,
                  placeholder: v.intl.string(v.t["5h0QOP"]),
                  autoFocus: !0,
                  onClear: () => {
                      D("");
                  },
              }),
              size: "md",
              "aria-label": v.intl.formatToPlainString(v.t["2tN7ih"], { name: h.name }),
              listProps:
                  c.length > 0
                      ? {
                            ref: T,
                            paddingBottom: 12,
                            sections: [c.length],
                            sectionHeight: 0,
                            renderSection: A.FXj,
                            rowHeight: (e, t) => (e > 0 ? 0 : 48 * (null != c[t])),
                            renderRow: (e) => {
                                let { section: t, row: r } = e;
                                if (t > 0) return null;
                                let n = c[r];
                                return null == n
                                    ? null
                                    : (0, s.jsx)(
                                          P,
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
                                p !== t && N(t);
                            },
                        }
                      : void 0,
              children: 0 === c.length && (0, s.jsx)("div", { className: b.wV }),
          });
}
