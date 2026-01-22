r.d(t, { default: () => y }), r(896048);
var n = r(627968),
    a = r(64700),
    s = r(158954),
    i = r(311907),
    l = r(397927),
    c = r(298990),
    u = r(966327),
    d = r(629357),
    o = r(47167),
    h = r(598104),
    m = r(255266),
    x = r(72563),
    f = r(921955),
    g = r(71393),
    b = r(994500),
    j = r(203982),
    p = r(427262),
    _ = r(652215),
    v = r(985018),
    A = r(129348);
let N = (e) => {
        let { channel: t, guildName: r } = e,
            a = (0, i.bG)([g.A], () => g.A.getGuild(t.guild_id)),
            s = (0, o.Ay)(t);
        return (0, n.jsxs)("div", {
            className: A.Ke,
            children: [
                (0, n.jsx)(m.A, {
                    size: m.q.SMALL_32,
                    guild: a,
                    channel: t,
                }),
                (0, n.jsxs)("div", {
                    className: A.D6,
                    children: [
                        (0, n.jsx)(l.Text, {
                            variant: "text-md/medium",
                            children: s,
                        }),
                        (0, n.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            children: r,
                        }),
                    ],
                }),
            ],
        });
    },
    T = (e) => {
        let { channel: t } = e,
            r = (0, o.Ay)(t),
            a = (0, x.i)(t);
        return (0, n.jsxs)("div", {
            className: A.Ke,
            children: [
                (0, n.jsx)(h.A, {
                    "aria-hidden": !0,
                    size: l._3J.SIZE_32,
                    channel: t,
                }),
                (0, n.jsxs)("div", {
                    className: A.D6,
                    children: [
                        (0, n.jsx)(l.Text, {
                            variant: "text-md/medium",
                            children: r,
                        }),
                        (0, n.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            children: a,
                        }),
                    ],
                }),
            ],
        });
    },
    S = (e) => {
        let { user: t, status: r } = e,
            a = (0, i.bG)([b.A], () => b.A.getNickname(t.id)),
            s = p.Ay.useName(t),
            c = p.Ay.useUserTag(t);
        return (0, n.jsxs)("div", {
            className: A.Ke,
            children: [
                (0, n.jsx)(u.A, {
                    "aria-hidden": !0,
                    size: l._3J.SIZE_32,
                    user: t,
                    status: r,
                }),
                (0, n.jsxs)("div", {
                    className: A.D6,
                    children: [
                        (0, n.jsx)(l.Text, {
                            variant: "text-md/medium",
                            children: null != a ? a : s,
                        }),
                        (0, n.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            children: c,
                        }),
                    ],
                }),
            ],
        });
    };
class P extends a.Component {
    render() {
        let e,
            t,
            { result: r, sending: a } = this.props;
        switch (r.type) {
            case d.rD.GROUP_DM:
                e = (0, n.jsx)(T, { channel: r.data.record });
                break;
            case d.rD.TEXT_CHANNEL: {
                let { categoryName: t, guildName: a } = r;
                e = (0, n.jsx)(N, {
                    channel: r.data.record,
                    categoryName: t,
                    guildName: a,
                });
                break;
            }
            case d.rD.USER: {
                let {
                    data: { comparator: t, record: a },
                    status: s,
                } = r;
                e = (0, n.jsx)(S, {
                    comparator: t,
                    user: a,
                    status: s,
                });
            }
        }
        return (
            (t = r.sent
                ? (0, n.jsx)(l.Button, {
                      variant: "secondary",
                      text: v.intl.string(v.t.i6A1Xw),
                      size: "sm",
                      disabled: !0,
                  })
                : (0, n.jsx)(l.Button, {
                      variant: "secondary",
                      text: v.intl.string(v.t["6F9ivu"]),
                      size: "sm",
                      loading: a,
                  })),
            (0, n.jsxs)(l.DUT, {
                className: A.Nn,
                onClick: this.handleClick,
                children: [e, t],
            })
        );
    }
    constructor(...e) {
        super(...e),
            (function (e, t, r) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = r);
            })(this, "handleClick", () => {
                let { onInvite: e, row: t } = this.props;
                e(t);
            });
    }
}
function y(e) {
    let { transitionState: t, onClose: r } = e,
        {
            results: u,
            query: o,
            activity: h,
        } = (0, i.cf)(
            [f.A],
            () => ({
                results: f.A.getResults(),
                query: f.A.getQuery(),
                activity: f.A.getActivity(),
            }),
            [],
        ),
        [m, x] = a.useState(o),
        [g, b] = a.useState([]),
        [p, N] = a.useState(!1),
        T = a.useRef(null),
        S = a.useCallback(() => {
            var e;
            null == (e = T.current) || e.scrollPageUp({ animate: !0 });
        }, [T]),
        y = a.useCallback(() => {
            var e;
            null == (e = T.current) || e.scrollPageDown({ animate: !0 });
        }, [T]);
    a.useEffect(
        () => (
            j._.subscribe(_.jej.SCROLL_PAGE_UP, S),
            () => {
                j._.unsubscribe(_.jej.SCROLL_PAGE_UP, S);
            }
        ),
        [S],
    ),
        a.useEffect(
            () => (
                j._.subscribe(_.jej.SCROLL_PAGE_DOWN, y),
                () => {
                    j._.unsubscribe(_.jej.SCROLL_PAGE_DOWN, y);
                }
            ),
            [y],
        ),
        a.useEffect(() => {
            null == h && r();
        }, [r, h]),
        a.useEffect(() => {
            var e;
            null == (e = T.current) || e.scrollToTop();
        }, [T, u]);
    let C = a.useCallback(
            (e) => {
                let {
                    data: t,
                    data: {
                        record: { id: r },
                    },
                } = u[e];
                if (!(null == r || g.includes(r)))
                    switch ((b([...g, r]), t.type)) {
                        case d.rD.GROUP_DM:
                        case d.rD.TEXT_CHANNEL:
                            (0, c.b4)(t.record.id);
                            break;
                        case d.rD.USER:
                            (0, c.Jb)(t.record.id);
                    }
            },
            [u, g],
        ),
        D = (e) => {
            x(e), (0, c.oR)(e);
        };
    return null == h
        ? null
        : (0, n.jsx)(s.Modal, {
              transitionState: t,
              title: v.intl.formatToPlainString(v.t["2tN7ih"], { name: h.name }),
              onClose: r,
              actions: [],
              input: (0, n.jsx)(l.IWV, {
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
                  u.length > 0
                      ? {
                            ref: T,
                            paddingBottom: 12,
                            sections: [u.length],
                            sectionHeight: 0,
                            renderSection: _.FXj,
                            rowHeight: (e, t) => (e > 0 ? 0 : 48 * (null != u[t])),
                            renderRow: (e) => {
                                let { section: t, row: r } = e;
                                if (t > 0) return null;
                                let a = u[r];
                                return null == a
                                    ? null
                                    : (0, n.jsx)(
                                          P,
                                          {
                                              row: r,
                                              result: a,
                                              sending: null != a.data.record.id && g.includes(a.data.record.id),
                                              onInvite: C,
                                          },
                                          a.data.record.id,
                                      );
                            },
                            onScroll: (e) => {
                                let t = e.currentTarget.scrollTop > 0;
                                p !== t && N(t);
                            },
                        }
                      : void 0,
              children: 0 === u.length && (0, n.jsx)("div", { className: A.wV }),
          });
}
