r.d(t, { default: () => E }), r(388685);
var s = r(54381),
    l = r(473749),
    n = r(793030),
    a = r(442837),
    i = r(481060),
    u = r(24124),
    d = r(700582),
    c = r(212819),
    o = r(933557),
    h = r(266076),
    m = r(810123),
    x = r(448486),
    f = r(606206),
    g = r(430824),
    p = r(699516),
    b = r(585483),
    j = r(51144),
    _ = r(981631),
    v = r(388032),
    T = r(761582);
let P = (e) => {
        let { channel: t, guildName: r } = e,
            l = (0, a.e7)([g.Z], () => g.Z.getGuild(t.guild_id)),
            n = (0, o.ZP)(t);
        return (0, s.jsxs)("div", {
            className: T.result,
            children: [
                (0, s.jsx)(m.Z, {
                    size: m.E.SMALL_32,
                    guild: l,
                    channel: t,
                }),
                (0, s.jsxs)("div", {
                    className: T.resultText,
                    children: [
                        (0, s.jsx)(i.Text, {
                            variant: "text-md/medium",
                            children: n,
                        }),
                        (0, s.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            children: r,
                        }),
                    ],
                }),
            ],
        });
    },
    S = (e) => {
        let { channel: t } = e,
            r = (0, o.ZP)(t),
            l = (0, x._)(t);
        return (0, s.jsxs)("div", {
            className: T.result,
            children: [
                (0, s.jsx)(h.Z, {
                    "aria-hidden": !0,
                    size: i.EFr.SIZE_32,
                    channel: t,
                }),
                (0, s.jsxs)("div", {
                    className: T.resultText,
                    children: [
                        (0, s.jsx)(i.Text, {
                            variant: "text-md/medium",
                            children: r,
                        }),
                        (0, s.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            children: l,
                        }),
                    ],
                }),
            ],
        });
    },
    C = (e) => {
        let { user: t, status: r } = e,
            l = (0, a.e7)([p.Z], () => p.Z.getNickname(t.id)),
            n = j.ZP.useName(t),
            u = j.ZP.useUserTag(t);
        return (0, s.jsxs)("div", {
            className: T.result,
            children: [
                (0, s.jsx)(d.Z, {
                    "aria-hidden": !0,
                    size: i.EFr.SIZE_32,
                    user: t,
                    status: r,
                }),
                (0, s.jsxs)("div", {
                    className: T.resultText,
                    children: [
                        (0, s.jsx)(i.Text, {
                            variant: "text-md/medium",
                            children: null != l ? l : n,
                        }),
                        (0, s.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            children: u,
                        }),
                    ],
                }),
            ],
        });
    };
class N extends l.Component {
    render() {
        let e,
            t,
            { result: r, sending: l } = this.props;
        switch (r.type) {
            case c.h8.GROUP_DM:
                e = (0, s.jsx)(S, { channel: r.data.record });
                break;
            case c.h8.TEXT_CHANNEL: {
                let { categoryName: t, guildName: l } = r;
                e = (0, s.jsx)(P, {
                    channel: r.data.record,
                    categoryName: t,
                    guildName: l,
                });
                break;
            }
            case c.h8.USER: {
                let {
                    data: { comparator: t, record: l },
                    status: n,
                } = r;
                e = (0, s.jsx)(C, {
                    comparator: t,
                    user: l,
                    status: n,
                });
            }
        }
        return (
            (t = r.sent
                ? (0, s.jsx)(i.Button, {
                      variant: "secondary",
                      text: v.intl.string(v.t.i6A1Xw),
                      size: "sm",
                      disabled: !0,
                  })
                : (0, s.jsx)(i.Button, {
                      variant: "secondary",
                      text: v.intl.string(v.t["6F9ivu"]),
                      size: "sm",
                      loading: l,
                  })),
            (0, s.jsxs)(i.P3F, {
                className: T.resultWrapper,
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
function E(e) {
    let { transitionState: t, onClose: r } = e,
        {
            results: d,
            query: o,
            activity: h,
        } = (0, a.cj)(
            [f.Z],
            () => ({
                results: f.Z.getResults(),
                query: f.Z.getQuery(),
                activity: f.Z.getActivity(),
            }),
            [],
        ),
        [m, x] = l.useState(o),
        [g, p] = l.useState([]),
        [j, P] = l.useState(!1),
        S = l.useRef(null),
        C = l.useCallback(() => {
            var e;
            null == (e = S.current) || e.scrollPageUp({ animate: !0 });
        }, [S]),
        E = l.useCallback(() => {
            var e;
            null == (e = S.current) || e.scrollPageDown({ animate: !0 });
        }, [S]);
    l.useEffect(
        () => (
            b.S.subscribe(_.CkL.SCROLL_PAGE_UP, C),
            () => {
                b.S.unsubscribe(_.CkL.SCROLL_PAGE_UP, C);
            }
        ),
        [C],
    ),
        l.useEffect(
            () => (
                b.S.subscribe(_.CkL.SCROLL_PAGE_DOWN, E),
                () => {
                    b.S.unsubscribe(_.CkL.SCROLL_PAGE_DOWN, E);
                }
            ),
            [E],
        ),
        l.useEffect(() => {
            null == h && r();
        }, [r, h]),
        l.useEffect(() => {
            var e;
            null == (e = S.current) || e.scrollToTop();
        }, [S, d]);
    let k = l.useCallback(
            (e) => {
                let {
                    data: t,
                    data: {
                        record: { id: r },
                    },
                } = d[e];
                if (!(null == r || g.includes(r)))
                    switch ((p([...g, r]), t.type)) {
                        case c.h8.GROUP_DM:
                        case c.h8.TEXT_CHANNEL:
                            (0, u.GG)(t.record.id);
                            break;
                        case c.h8.USER:
                            (0, u.R2)(t.record.id);
                    }
            },
            [d, g],
        ),
        Z = (e) => {
            x(e), (0, u.rh)(e);
        };
    return null == h
        ? null
        : (0, s.jsx)(n.Modal, {
              transitionState: t,
              title: v.intl.formatToPlainString(v.t["2tN7ih"], { name: h.name }),
              onClose: r,
              actions: [],
              input: (0, s.jsx)(i.E1j, {
                  query: m,
                  onChange: Z,
                  placeholder: v.intl.string(v.t["5h0QOP"]),
                  autoFocus: !0,
                  onClear: () => {
                      Z("");
                  },
              }),
              size: "md",
              "aria-label": v.intl.formatToPlainString(v.t["2tN7ih"], { name: h.name }),
              children: (0, s.jsx)(i.YAO, {
                  scrollerRef: S,
                  className: 0 === d.length ? T.noResults : T.results,
                  paddingBottom: 12,
                  sections: [d.length],
                  sectionHeight: 0,
                  renderSection: _.VqG,
                  rowHeight: (e, t) => (e > 0 ? 0 : 48 * (null != d[t])),
                  renderRow: (e) => {
                      let { section: t, row: r } = e;
                      if (t > 0) return null;
                      let l = d[r];
                      return null == l
                          ? null
                          : (0, s.jsx)(
                                N,
                                {
                                    row: r,
                                    result: l,
                                    sending: null != l.data.record.id && g.includes(l.data.record.id),
                                    onInvite: k,
                                },
                                l.data.record.id,
                            );
                  },
                  onScroll: (e) => {
                      let t = e.currentTarget.scrollTop > 0;
                      j !== t && P(t);
                  },
              }),
          });
}
