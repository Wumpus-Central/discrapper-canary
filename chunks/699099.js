l.r(t),
    l.d(t, {
        default: function () {
            return A;
        }
    }),
    l(47120);
var n = l(200651),
    s = l(192379),
    r = l(120356),
    a = l.n(r),
    i = l(442837),
    u = l(481060),
    o = l(24124),
    c = l(461745),
    d = l(212819),
    h = l(43267),
    f = l(447003),
    p = l(933557),
    _ = l(606206),
    m = l(585483),
    N = l(981631),
    v = l(388032),
    g = l(859686),
    C = l(232186);
function E(e, t, l) {
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
        let { channel: t, categoryName: l, guildName: s } = e,
            r = u.TextIcon;
        return (
            (0, f.Z)(t) ? (r = u.TextLockIcon) : t.isNSFW() && (r = u.TextWarningIcon),
            (0, n.jsxs)('div', {
                className: g.result,
                children: [
                    (0, n.jsx)(r, {
                        className: g.resultIcon,
                        colorClass: g.resultIconBackground,
                        size: 'xs'
                    }),
                    (0, n.jsxs)('div', {
                        className: g.resultText,
                        children: [
                            (0, n.jsx)('span', { children: t.name }),
                            (0, n.jsx)('span', {
                                className: g.resultCategoryName,
                                children: l
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: g.resultGuildName,
                        children: s
                    })
                ]
            })
        );
    },
    S = (e) => {
        let { channel: t } = e,
            l = (0, p.ZP)(t);
        return (0, n.jsxs)('div', {
            className: g.result,
            children: [
                (0, n.jsx)(u.Avatar, {
                    src: (0, h.x)(t),
                    'aria-label': null != l ? l : '',
                    className: g.resultAvatar,
                    size: u.AvatarSizes.SIZE_32
                }),
                (0, n.jsx)('div', {
                    className: g.resultText,
                    children: l
                })
            ]
        });
    },
    T = (e) => {
        let t,
            { user: l, comparator: s, status: r } = e;
        if (null != s && s === l.tag) {
            let e = s.split('#');
            e.pop(), (t = e.join('#'));
        } else t = null != s && '' !== s ? s : l.username;
        return (0, n.jsxs)('div', {
            className: g.result,
            children: [
                (0, n.jsx)(u.Avatar, {
                    src: l.getAvatarURL(void 0, 32),
                    'aria-label': l.username,
                    className: g.resultAvatar,
                    size: u.AvatarSizes.SIZE_32,
                    status: r
                }),
                (0, n.jsxs)('div', {
                    className: g.resultText,
                    children: [
                        (0, n.jsx)('span', { children: t }),
                        (0, n.jsx)('span', {
                            className: g.resultUsername,
                            children: l.tag
                        })
                    ]
                })
            ]
        });
    };
class x extends s.Component {
    render() {
        let e, t;
        let { result: l, selected: s, sending: r } = this.props;
        switch (l.type) {
            case d.h8.GROUP_DM:
                e = (0, n.jsx)(S, { channel: l.data.record });
                break;
            case d.h8.TEXT_CHANNEL: {
                let { categoryName: t, guildName: s } = l;
                e = (0, n.jsx)(I, {
                    channel: l.data.record,
                    categoryName: t,
                    guildName: s
                });
                break;
            }
            case d.h8.USER: {
                let {
                    data: { comparator: t, record: s },
                    status: r
                } = l;
                e = (0, n.jsx)(T, {
                    comparator: t,
                    user: s,
                    status: r
                });
            }
        }
        return (
            (t = l.sent
                ? (0, n.jsx)(u.Button, {
                      className: g.inviteButton,
                      look: u.Button.Looks.LINK,
                      size: u.Button.Sizes.SMALL,
                      disabled: !0,
                      color: u.Button.Colors.WHITE,
                      children: v.intl.string(v.t.i6A1X1)
                  })
                : (0, n.jsx)(u.Button, {
                      color: u.Button.Colors.GREEN,
                      look: s ? u.Button.Looks.FILLED : u.Button.Looks.OUTLINED,
                      className: g.inviteButton,
                      size: u.Button.Sizes.SMALL,
                      submitting: r,
                      onClick: this.handleClick,
                      children: v.intl.string(v.t['6F9ivr'])
                  })),
            (0, n.jsxs)('div', {
                className: a()(g.resultWrapper, { [g.resultWrapperSelected]: s }),
                onMouseEnter: this.handleMouseEnter,
                children: [e, t]
            })
        );
    }
    constructor(...e) {
        super(...e),
            E(this, 'handleClick', () => {
                let { onInvite: e, row: t } = this.props;
                e(t);
            }),
            E(this, 'handleMouseEnter', () => {
                let { onMouseEnter: e, row: t } = this.props;
                e(t);
            });
    }
}
function A(e) {
    let { transitionState: t, onClose: l } = e,
        {
            results: r,
            query: a,
            activity: h
        } = (0, i.cj)(
            [_.Z],
            () => ({
                results: _.Z.getResults(),
                query: _.Z.getQuery(),
                activity: _.Z.getActivity()
            }),
            []
        ),
        [f, p] = s.useState(a),
        [E, I] = s.useState(0),
        [S, T] = s.useState([]),
        [A, L] = s.useState(!1),
        y = s.useRef(null),
        R = s.useCallback(() => {
            var e;
            null === (e = y.current) || void 0 === e || e.scrollPageUp({ animate: !0 });
        }, [y]),
        j = s.useCallback(() => {
            var e;
            null === (e = y.current) || void 0 === e || e.scrollPageDown({ animate: !0 });
        }, [y]);
    s.useEffect(
        () => (
            m.S.subscribe(N.CkL.SCROLL_PAGE_UP, R),
            () => {
                m.S.unsubscribe(N.CkL.SCROLL_PAGE_UP, R);
            }
        ),
        [R]
    ),
        s.useEffect(
            () => (
                m.S.subscribe(N.CkL.SCROLL_PAGE_DOWN, j),
                () => {
                    m.S.unsubscribe(N.CkL.SCROLL_PAGE_DOWN, j);
                }
            ),
            [j]
        ),
        s.useEffect(() => {
            null == h && l();
        }, [l, h]),
        s.useEffect(() => {
            var e;
            null === (e = y.current) || void 0 === e || e.scrollToTop(), I(0);
        }, [y, r]);
    let b = s.useCallback(
            (e) => {
                let {
                    data: t,
                    data: {
                        record: { id: l }
                    }
                } = r[e];
                if (!(null == l || S.includes(l)))
                    switch ((T([...S, l]), t.type)) {
                        case d.h8.GROUP_DM:
                        case d.h8.TEXT_CHANNEL:
                            (0, o.GG)(t.record.id);
                            break;
                        case d.h8.USER:
                            (0, o.R2)(t.record.id);
                    }
            },
            [r, S]
        ),
        M = s.useCallback(
            (e) => {
                I(e);
            },
            [I]
        ),
        k = () => {
            P('');
        },
        P = (e) => {
            p(e), (0, o.rh)(e);
        };
    return null == h
        ? null
        : (0, n.jsxs)(u.ModalRoot, {
              transitionState: t,
              size: u.ModalSize.SMALL,
              'aria-label': v.intl.formatToPlainString(v.t['2tN7io'], { name: h.name }),
              children: [
                  (0, n.jsxs)(u.ModalHeader, {
                      separator: A,
                      children: [
                          (0, n.jsx)(u.ModalCloseButton, {
                              className: g.closeButton,
                              onClick: l
                          }),
                          (0, n.jsxs)('div', {
                              className: g.header,
                              children: [
                                  (0, n.jsx)(u.FormTitle, {
                                      tag: 'h2',
                                      className: C.marginBottom8,
                                      children: v.intl.format(v.t['2tN7io'], { name: h.name })
                                  }),
                                  (0, n.jsx)(c.ZP, {
                                      size: c.ZP.Sizes.MEDIUM,
                                      query: f,
                                      selectedSection: 0,
                                      selectedRow: E,
                                      sections: [r.length],
                                      className: C.marginTop4,
                                      onSelect: (e, t) => {
                                          null == t ? k() : b(t);
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
                                      onQueryChange: P,
                                      placeholder: v.intl.string(v.t.IJExws),
                                      autoFocus: !0,
                                      onClear: k
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, n.jsx)(u.ModalListContent, {
                      scrollerRef: y,
                      className: 0 === r.length ? g.noResults : g.results,
                      paddingBottom: 8,
                      sections: [r.length],
                      sectionHeight: 0,
                      renderSection: N.VqG,
                      rowHeight: (e, t) => (e > 0 ? 0 : null != r[t] ? 44 : 0),
                      renderRow: (e) => {
                          let { section: t, row: l } = e;
                          if (t > 0) return null;
                          let s = r[l];
                          return null == s
                              ? null
                              : (0, n.jsx)(
                                    x,
                                    {
                                        row: l,
                                        result: s,
                                        sending: null != s.data.record.id && S.includes(s.data.record.id),
                                        selected: l === E,
                                        onMouseEnter: M,
                                        onInvite: b
                                    },
                                    s.data.record.id
                                );
                      },
                      onScroll: (e) => {
                          let t = e.currentTarget.scrollTop > 0;
                          A !== t && L(t);
                      }
                  })
              ]
          });
}
