s.d(t, { default: () => L });
var r = s(477900),
    n = s(582128),
    i = s(17928),
    a = s(189213),
    l = s(834730),
    c = s(778712),
    d = s(821609),
    u = s(939249),
    o = s(683438),
    x = s(298990),
    h = s(966327),
    m = s(115718),
    j = s(47167),
    E = s(598104),
    f = s(255266),
    g = s(72563),
    A = s(921955),
    p = s(71393),
    b = s(994500),
    _ = s(625494),
    v = s(427262),
    N = s(652215),
    D = s(660183),
    y = s(915822);
function C(e) {
    let { channel: t, guildName: s } = e,
        n = (0, i.bG)([p.A], () => p.A.getGuild(t.guild_id)),
        a = (0, j.Ay)(t);
    return (0, r.jsxs)("div", {
        className: y.Ke,
        children: [
            (0, r.jsx)(f.A, { size: f.q.SMALL_32, guild: n, channel: t }),
            (0, r.jsxs)("div", {
                className: y.D6,
                children: [
                    (0, r.jsx)(l.E, { variant: "text-md/medium", children: a }),
                    (0, r.jsx)(l.E, { variant: "text-xs/normal", children: s }),
                ],
            }),
        ],
    });
}
function S(e) {
    let { channel: t } = e,
        s = (0, j.Ay)(t),
        n = (0, g.i)(t);
    return (0, r.jsxs)("div", {
        className: y.Ke,
        children: [
            (0, r.jsx)(E.A, { "aria-hidden": !0, size: c._3.SIZE_32, channel: t }),
            (0, r.jsxs)("div", {
                className: y.D6,
                children: [
                    (0, r.jsx)(l.E, { variant: "text-md/medium", children: s }),
                    (0, r.jsx)(l.E, { variant: "text-xs/normal", children: n }),
                ],
            }),
        ],
    });
}
function R(e) {
    let { user: t, status: s } = e,
        n = (0, i.bG)([b.A], () => b.A.getNickname(t.id)),
        a = v.Ay.useName(t),
        d = v.Ay.useUserTag(t);
    return (0, r.jsxs)("div", {
        className: y.Ke,
        children: [
            (0, r.jsx)(h.A, { "aria-hidden": !0, size: c._3.SIZE_32, user: t, status: s }),
            (0, r.jsxs)("div", {
                className: y.D6,
                children: [
                    (0, r.jsx)(l.E, { variant: "text-md/medium", children: n ?? a }),
                    (0, r.jsx)(l.E, { variant: "text-xs/normal", children: d }),
                ],
            }),
        ],
    });
}
function k(e) {
    let { text: t } = e;
    return (0, r.jsx)("div", {
        className: y.bV,
        children: (0, r.jsx)(l.E, { variant: "text-xs/semibold", color: "text-muted", children: t }),
    });
}
class P extends n.Component {
    handleClick = () => {
        let { onInvite: e, row: t } = this.props;
        e(t);
    };
    render() {
        let e,
            t,
            { result: s, sending: n } = this.props;
        switch (s.type) {
            case m.rD.GROUP_DM:
                e = (0, r.jsx)(S, { channel: s.data.record });
                break;
            case m.rD.TEXT_CHANNEL: {
                let { categoryName: t, guildName: n } = s;
                e = (0, r.jsx)(C, { channel: s.data.record, categoryName: t, guildName: n });
                break;
            }
            case m.rD.USER: {
                let {
                    data: { comparator: t, record: n },
                    status: i,
                } = s;
                e = (0, r.jsx)(R, { comparator: t, user: n, status: i });
            }
        }
        return (
            (t = s.sent
                ? (0, r.jsx)(d.$, { variant: "secondary", text: D.intl.string(D.t.i6A1Xw), size: "sm", disabled: !0 })
                : (0, r.jsx)(d.$, {
                      variant: "secondary",
                      text: D.intl.string(D.t["6F9ivu"]),
                      size: "sm",
                      loading: n,
                  })),
            (0, r.jsxs)(u.D, { className: y.Nn, onClick: this.handleClick, children: [e, t] })
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
            [A.A],
            () => ({ results: A.A.getResults(), query: A.A.getQuery(), activity: A.A.getActivity() }),
            [],
        ),
        [u, h] = n.useState(c),
        [j, E] = n.useState([]),
        [f, g] = n.useState(!1),
        p = n.useRef(null),
        b = n.useCallback(() => {
            p.current?.scrollPageUp({ animate: !0 });
        }, [p]),
        v = n.useCallback(() => {
            p.current?.scrollPageDown({ animate: !0 });
        }, [p]);
    (n.useEffect(
        () => (
            _._.subscribe(N.jej.SCROLL_PAGE_UP, b),
            () => {
                _._.unsubscribe(N.jej.SCROLL_PAGE_UP, b);
            }
        ),
        [b],
    ),
        n.useEffect(
            () => (
                _._.subscribe(N.jej.SCROLL_PAGE_DOWN, v),
                () => {
                    _._.unsubscribe(N.jej.SCROLL_PAGE_DOWN, v);
                }
            ),
            [v],
        ),
        n.useEffect(() => {
            null == d && s();
        }, [s, d]),
        n.useEffect(() => {
            p.current?.scrollToTop();
        }, [p, c]));
    let C = n.useCallback(
        (e) => {
            let t = l[e];
            if (null == t || t.type === m.rD.HEADER) return;
            let {
                data: s,
                data: {
                    record: { id: r },
                },
            } = t;
            if (!(null == r || j.includes(r)))
                switch ((E([...j, r]), s.type)) {
                    case m.rD.GROUP_DM:
                    case m.rD.TEXT_CHANNEL:
                        (0, x.b4)(s.record.id);
                        break;
                    case m.rD.USER:
                        (0, x.Jb)(s.record.id);
                }
        },
        [l, j],
    );
    function S(e) {
        (h(e), (0, x.oR)(e));
    }
    return null == d
        ? null
        : (0, r.jsx)(a.a, {
              transitionState: t,
              title: D.intl.formatToPlainString(D.t["2tN7ih"], { name: d.name }),
              onClose: s,
              actions: [],
              input: (0, r.jsx)(o.I, {
                  query: u,
                  onChange: S,
                  placeholder: D.intl.string(D.t["5h0QOP"]),
                  autoFocus: !0,
                  onClear: function () {
                      S("");
                  },
              }),
              size: "md",
              "aria-label": D.intl.formatToPlainString(D.t["2tN7ih"], { name: d.name }),
              listProps:
                  l.length > 0
                      ? {
                            ref: p,
                            paddingBottom: 12,
                            sections: [l.length],
                            sectionHeight: 0,
                            renderSection: N.FXj,
                            rowHeight: function (e, t) {
                                if (e > 0) return 0;
                                let s = l[t];
                                return null == s ? 0 : s.type === m.rD.HEADER ? 32 : 48;
                            },
                            renderRow: function (e) {
                                let { section: t, row: s } = e;
                                if (t > 0) return null;
                                let n = l[s];
                                return null == n
                                    ? null
                                    : n.type === m.rD.HEADER
                                      ? (0, r.jsx)(k, { text: n.data.record.text }, n.data.record.id)
                                      : (0, r.jsx)(
                                            P,
                                            {
                                                row: s,
                                                result: n,
                                                sending: null != n.data.record.id && j.includes(n.data.record.id),
                                                onInvite: C,
                                            },
                                            n.data.record.id,
                                        );
                            },
                            onScroll: function (e) {
                                let t = e.currentTarget.scrollTop > 0;
                                f !== t && g(t);
                            },
                        }
                      : void 0,
              children: 0 === l.length && (0, r.jsx)("div", { className: y.wV }),
          });
}
