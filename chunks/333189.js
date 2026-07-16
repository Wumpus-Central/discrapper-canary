s.d(t, { default: () => L });
var n = s(627968),
    r = s(64700),
    a = s(189213),
    i = s(17928),
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
    f = s(255266),
    A = s(72563),
    _ = s(921955),
    b = s(71393),
    p = s(994500),
    E = s(625494),
    v = s(427262),
    N = s(652215),
    C = s(375708),
    S = s(231171);
function y(e) {
    let { channel: t, guildName: s } = e,
        r = (0, i.bG)([b.A], () => b.A.getGuild(t.guild_id)),
        a = (0, j.Ay)(t);
    return (0, n.jsxs)("div", {
        className: S.Ke,
        children: [
            (0, n.jsx)(f.A, { size: f.q.SMALL_32, guild: r, channel: t }),
            (0, n.jsxs)("div", {
                className: S.D6,
                children: [
                    (0, n.jsx)(l.E, { variant: "text-md/medium", children: a }),
                    (0, n.jsx)(l.E, { variant: "text-xs/normal", children: s }),
                ],
            }),
        ],
    });
}
function D(e) {
    let { channel: t } = e,
        s = (0, j.Ay)(t),
        r = (0, A.i)(t);
    return (0, n.jsxs)("div", {
        className: S.Ke,
        children: [
            (0, n.jsx)(g.A, { "aria-hidden": !0, size: c._3.SIZE_32, channel: t }),
            (0, n.jsxs)("div", {
                className: S.D6,
                children: [
                    (0, n.jsx)(l.E, { variant: "text-md/medium", children: s }),
                    (0, n.jsx)(l.E, { variant: "text-xs/normal", children: r }),
                ],
            }),
        ],
    });
}
function k(e) {
    let { user: t, status: s } = e,
        r = (0, i.bG)([p.A], () => p.A.getNickname(t.id)),
        a = v.Ay.useName(t),
        d = v.Ay.useUserTag(t);
    return (0, n.jsxs)("div", {
        className: S.Ke,
        children: [
            (0, n.jsx)(m.A, { "aria-hidden": !0, size: c._3.SIZE_32, user: t, status: s }),
            (0, n.jsxs)("div", {
                className: S.D6,
                children: [
                    (0, n.jsx)(l.E, { variant: "text-md/medium", children: r ?? a }),
                    (0, n.jsx)(l.E, { variant: "text-xs/normal", children: d }),
                ],
            }),
        ],
    });
}
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
                e = (0, n.jsx)(D, { channel: s.data.record });
                break;
            case x.rD.TEXT_CHANNEL: {
                let { categoryName: t, guildName: r } = s;
                e = (0, n.jsx)(y, { channel: s.data.record, categoryName: t, guildName: r });
                break;
            }
            case x.rD.USER: {
                let {
                    data: { comparator: t, record: r },
                    status: a,
                } = s;
                e = (0, n.jsx)(k, { comparator: t, user: r, status: a });
            }
        }
        return (
            (t = s.sent
                ? (0, n.jsx)(d.$, { variant: "secondary", text: C.intl.string(C.t.i6A1Xw), size: "sm", disabled: !0 })
                : (0, n.jsx)(d.$, {
                      variant: "secondary",
                      text: C.intl.string(C.t["6F9ivu"]),
                      size: "sm",
                      loading: r,
                  })),
            (0, n.jsxs)(u.D, { className: S.Nn, onClick: this.handleClick, children: [e, t] })
        );
    }
}
function L(e) {
    let { transitionState: t, onClose: s } = e,
        {
            results: l,
            query: c,
            activity: d,
        } = (0, i.cf)(
            [_.A],
            () => ({ results: _.A.getResults(), query: _.A.getQuery(), activity: _.A.getActivity() }),
            [],
        ),
        [u, m] = r.useState(c),
        [j, g] = r.useState([]),
        [f, A] = r.useState(!1),
        b = r.useRef(null),
        p = r.useCallback(() => {
            b.current?.scrollPageUp({ animate: !0 });
        }, [b]),
        v = r.useCallback(() => {
            b.current?.scrollPageDown({ animate: !0 });
        }, [b]);
    r.useEffect(
        () => (
            E._.subscribe(N.jej.SCROLL_PAGE_UP, p),
            () => {
                E._.unsubscribe(N.jej.SCROLL_PAGE_UP, p);
            }
        ),
        [p],
    ),
        r.useEffect(
            () => (
                E._.subscribe(N.jej.SCROLL_PAGE_DOWN, v),
                () => {
                    E._.unsubscribe(N.jej.SCROLL_PAGE_DOWN, v);
                }
            ),
            [v],
        ),
        r.useEffect(() => {
            null == d && s();
        }, [s, d]),
        r.useEffect(() => {
            b.current?.scrollToTop();
        }, [b, l]);
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
    );
    function D(e) {
        m(e), (0, h.oR)(e);
    }
    return null == d
        ? null
        : (0, n.jsx)(a.Modal, {
              transitionState: t,
              title: C.intl.formatToPlainString(C.t["2tN7ih"], { name: d.name }),
              onClose: s,
              actions: [],
              input: (0, n.jsx)(o.I, {
                  query: u,
                  onChange: D,
                  placeholder: C.intl.string(C.t["5h0QOP"]),
                  autoFocus: !0,
                  onClear: function () {
                      D("");
                  },
              }),
              size: "md",
              "aria-label": C.intl.formatToPlainString(C.t["2tN7ih"], { name: d.name }),
              listProps:
                  l.length > 0
                      ? {
                            ref: b,
                            paddingBottom: 12,
                            sections: [l.length],
                            sectionHeight: 0,
                            renderSection: N.FXj,
                            rowHeight: function (e, t) {
                                return e > 0 ? 0 : 48 * (null != l[t]);
                            },
                            renderRow: function (e) {
                                let { section: t, row: s } = e;
                                if (t > 0) return null;
                                let r = l[s];
                                return null == r
                                    ? null
                                    : (0, n.jsx)(
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
                            onScroll: function (e) {
                                let t = e.currentTarget.scrollTop > 0;
                                f !== t && A(t);
                            },
                        }
                      : void 0,
              children: 0 === l.length && (0, n.jsx)("div", { className: S.wV }),
          });
}
