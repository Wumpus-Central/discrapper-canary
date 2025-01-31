l.d(t, { default: () => f }), l(47120);
var s = l(200651),
    r = l(192379),
    n = l(120356),
    a = l.n(n),
    i = l(442837),
    u = l(481060),
    c = l(24124),
    o = l(461745),
    d = l(212819),
    h = l(43267),
    _ = l(447003),
    p = l(933557),
    m = l(606206),
    N = l(585483),
    E = l(981631),
    g = l(388032),
    x = l(859686),
    v = l(232186);
function C(e, t, l) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = l),
        e
    );
}
let I = (e) => {
        let { channel: t, categoryName: l, guildName: r } = e,
            n = u.VL1;
        return (
            (0, _.Z)(t) ? (n = u.W4G) : t.isNSFW() && (n = u.z0B),
            (0, s.jsxs)('div', {
                className: x.result,
                children: [
                    (0, s.jsx)(n, {
                        className: x.resultIcon,
                        colorClass: x.resultIconBackground,
                        size: 'xs'
                    }),
                    (0, s.jsxs)('div', {
                        className: x.resultText,
                        children: [
                            (0, s.jsx)('span', { children: t.name }),
                            (0, s.jsx)('span', {
                                className: x.resultCategoryName,
                                children: l
                            })
                        ]
                    }),
                    (0, s.jsx)('div', {
                        className: x.resultGuildName,
                        children: r
                    })
                ]
            })
        );
    },
    S = (e) => {
        let { channel: t } = e,
            l = (0, p.ZP)(t);
        return (0, s.jsxs)('div', {
            className: x.result,
            children: [
                (0, s.jsx)(u.qEK, {
                    src: (0, h.x)(t),
                    'aria-label': null != l ? l : '',
                    className: x.resultAvatar,
                    size: u.EFr.SIZE_32
                }),
                (0, s.jsx)('div', {
                    className: x.resultText,
                    children: l
                })
            ]
        });
    },
    T = (e) => {
        let t,
            { user: l, comparator: r, status: n } = e;
        if (null != r && r === l.tag) {
            let e = r.split('#');
            e.pop(), (t = e.join('#'));
        } else t = null != r && '' !== r ? r : l.username;
        return (0, s.jsxs)('div', {
            className: x.result,
            children: [
                (0, s.jsx)(u.qEK, {
                    src: l.getAvatarURL(void 0, 32),
                    'aria-label': l.username,
                    className: x.resultAvatar,
                    size: u.EFr.SIZE_32,
                    status: n
                }),
                (0, s.jsxs)('div', {
                    className: x.resultText,
                    children: [
                        (0, s.jsx)('span', { children: t }),
                        (0, s.jsx)('span', {
                            className: x.resultUsername,
                            children: l.tag
                        })
                    ]
                })
            ]
        });
    };
class A extends r.Component {
    render() {
        let e, t;
        let { result: l, selected: r, sending: n } = this.props;
        switch (l.type) {
            case d.h8.GROUP_DM:
                e = (0, s.jsx)(S, { channel: l.data.record });
                break;
            case d.h8.TEXT_CHANNEL: {
                let { categoryName: t, guildName: r } = l;
                e = (0, s.jsx)(I, {
                    channel: l.data.record,
                    categoryName: t,
                    guildName: r
                });
                break;
            }
            case d.h8.USER: {
                let {
                    data: { comparator: t, record: r },
                    status: n
                } = l;
                e = (0, s.jsx)(T, {
                    comparator: t,
                    user: r,
                    status: n
                });
            }
        }
        return (
            (t = l.sent
                ? (0, s.jsx)(u.zxk, {
                      className: x.inviteButton,
                      look: u.zxk.Looks.LINK,
                      size: u.zxk.Sizes.SMALL,
                      disabled: !0,
                      color: u.zxk.Colors.WHITE,
                      children: g.intl.string(g.t.i6A1X1)
                  })
                : (0, s.jsx)(u.zxk, {
                      color: u.zxk.Colors.GREEN,
                      look: r ? u.zxk.Looks.FILLED : u.zxk.Looks.OUTLINED,
                      className: x.inviteButton,
                      size: u.zxk.Sizes.SMALL,
                      submitting: n,
                      onClick: this.handleClick,
                      children: g.intl.string(g.t['6F9ivr'])
                  })),
            (0, s.jsxs)('div', {
                className: a()(x.resultWrapper, { [x.resultWrapperSelected]: r }),
                onMouseEnter: this.handleMouseEnter,
                children: [e, t]
            })
        );
    }
    constructor(...e) {
        super(...e),
            C(this, 'handleClick', () => {
                let { onInvite: e, row: t } = this.props;
                e(t);
            }),
            C(this, 'handleMouseEnter', () => {
                let { onMouseEnter: e, row: t } = this.props;
                e(t);
            });
    }
}
function f(e) {
    let { transitionState: t, onClose: l } = e,
        {
            results: n,
            query: a,
            activity: h
        } = (0, i.cj)(
            [m.Z],
            () => ({
                results: m.Z.getResults(),
                query: m.Z.getQuery(),
                activity: m.Z.getActivity()
            }),
            []
        ),
        [_, p] = r.useState(a),
        [C, I] = r.useState(0),
        [S, T] = r.useState([]),
        [f, L] = r.useState(!1),
        y = r.useRef(null),
        k = r.useCallback(() => {
            var e;
            null === (e = y.current) || void 0 === e || e.scrollPageUp({ animate: !0 });
        }, [y]),
        R = r.useCallback(() => {
            var e;
            null === (e = y.current) || void 0 === e || e.scrollPageDown({ animate: !0 });
        }, [y]);
    r.useEffect(
        () => (
            N.S.subscribe(E.CkL.SCROLL_PAGE_UP, k),
            () => {
                N.S.unsubscribe(E.CkL.SCROLL_PAGE_UP, k);
            }
        ),
        [k]
    ),
        r.useEffect(
            () => (
                N.S.subscribe(E.CkL.SCROLL_PAGE_DOWN, R),
                () => {
                    N.S.unsubscribe(E.CkL.SCROLL_PAGE_DOWN, R);
                }
            ),
            [R]
        ),
        r.useEffect(() => {
            null == h && l();
        }, [l, h]),
        r.useEffect(() => {
            var e;
            null === (e = y.current) || void 0 === e || e.scrollToTop(), I(0);
        }, [y, n]);
    let j = r.useCallback(
            (e) => {
                let {
                    data: t,
                    data: {
                        record: { id: l }
                    }
                } = n[e];
                if (!(null == l || S.includes(l)))
                    switch ((T([...S, l]), t.type)) {
                        case d.h8.GROUP_DM:
                        case d.h8.TEXT_CHANNEL:
                            (0, c.GG)(t.record.id);
                            break;
                        case d.h8.USER:
                            (0, c.R2)(t.record.id);
                    }
            },
            [n, S]
        ),
        b = r.useCallback(
            (e) => {
                I(e);
            },
            [I]
        ),
        P = () => {
            O('');
        },
        O = (e) => {
            p(e), (0, c.rh)(e);
        };
    return null == h
        ? null
        : (0, s.jsxs)(u.Y0X, {
              transitionState: t,
              size: u.CgR.SMALL,
              'aria-label': g.intl.formatToPlainString(g.t['2tN7io'], { name: h.name }),
              children: [
                  (0, s.jsxs)(u.xBx, {
                      separator: f,
                      children: [
                          (0, s.jsx)(u.olH, {
                              className: x.closeButton,
                              onClick: l
                          }),
                          (0, s.jsxs)('div', {
                              className: x.header,
                              children: [
                                  (0, s.jsx)(u.vwX, {
                                      tag: 'h2',
                                      className: v.marginBottom8,
                                      children: g.intl.format(g.t['2tN7io'], { name: h.name })
                                  }),
                                  (0, s.jsx)(o.ZP, {
                                      size: o.ZP.Sizes.MEDIUM,
                                      query: _,
                                      selectedSection: 0,
                                      selectedRow: C,
                                      sections: [n.length],
                                      className: v.marginTop4,
                                      onSelect: (e, t) => {
                                          null == t ? P() : j(t);
                                      },
                                      onSelectionChange: (e, t) => {
                                          var l;
                                          I(t),
                                              null === (l = y.current) ||
                                                  void 0 === l ||
                                                  l.scrollIntoViewRect({
                                                      start: 44 * t,
                                                      end: 44 * t + 44
                                                  });
                                      },
                                      onQueryChange: O,
                                      placeholder: g.intl.string(g.t.IJExws),
                                      autoFocus: !0,
                                      onClear: P
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, s.jsx)(u.YAO, {
                      scrollerRef: y,
                      className: 0 === n.length ? x.noResults : x.results,
                      paddingBottom: 8,
                      sections: [n.length],
                      sectionHeight: 0,
                      renderSection: E.VqG,
                      rowHeight: (e, t) => (e > 0 ? 0 : null != n[t] ? 44 : 0),
                      renderRow: (e) => {
                          let { section: t, row: l } = e;
                          if (t > 0) return null;
                          let r = n[l];
                          return null == r
                              ? null
                              : (0, s.jsx)(
                                    A,
                                    {
                                        row: l,
                                        result: r,
                                        sending: null != r.data.record.id && S.includes(r.data.record.id),
                                        selected: l === C,
                                        onMouseEnter: b,
                                        onInvite: j
                                    },
                                    r.data.record.id
                                );
                      },
                      onScroll: (e) => {
                          let t = e.currentTarget.scrollTop > 0;
                          f !== t && L(t);
                      }
                  })
              ]
          });
}
