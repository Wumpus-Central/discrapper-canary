l.d(t, { default: () => A }), l(388685);
var r = l(200651),
    n = l(192379),
    s = l(120356),
    a = l.n(s),
    u = l(442837),
    i = l(481060),
    c = l(24124),
    o = l(461745),
    d = l(212819),
    h = l(43267),
    p = l(447003),
    _ = l(933557),
    m = l(606206),
    N = l(592125),
    g = l(944486),
    E = l(585483),
    C = l(5192),
    y = l(51144),
    f = l(981631),
    v = l(388032),
    x = l(944801),
    I = l(20493);
function O(e, t, l) {
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
let S = (e) => {
        let { channel: t, categoryName: l, guildName: n } = e,
            s = i.VL1;
        return (
            (0, p.Z)(t) ? (s = i.W4G) : t.isNSFW() && (s = i.z0B),
            (0, r.jsxs)('div', {
                className: x.result,
                children: [
                    (0, r.jsx)(s, {
                        className: x.resultIcon,
                        colorClass: x.resultIconBackground,
                        size: 'xs'
                    }),
                    (0, r.jsxs)('div', {
                        className: x.resultText,
                        children: [
                            (0, r.jsx)('span', { children: t.name }),
                            (0, r.jsx)('span', {
                                className: x.resultCategoryName,
                                children: l
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: x.resultGuildName,
                        children: n
                    })
                ]
            })
        );
    },
    b = (e) => {
        let { channel: t } = e,
            l = (0, _.ZP)(t);
        return (0, r.jsxs)('div', {
            className: x.result,
            children: [
                (0, r.jsx)(i.qEK, {
                    src: (0, h.x)(t),
                    'aria-label': null != l ? l : '',
                    className: x.resultAvatar,
                    size: i.EFr.SIZE_32
                }),
                (0, r.jsx)('div', {
                    className: x.resultText,
                    children: l
                })
            ]
        });
    },
    j = (e) => {
        let { user: t, status: l } = e,
            n = (0, u.e7)([g.Z, N.Z], () => {
                var e;
                let t = null != (e = g.Z.getVoiceChannelId()) ? e : g.Z.getChannelId();
                return null == t ? null : N.Z.getChannel(t);
            }),
            s = null == n ? void 0 : n.guild_id,
            a = null == n ? void 0 : n.id,
            c = C.ZP.useName(s, a, t),
            o = y.ZP.useName(t);
        return (0, r.jsxs)('div', {
            className: x.result,
            children: [
                (0, r.jsx)(i.qEK, {
                    src: t.getAvatarURL(void 0, 32),
                    'aria-label': t.username,
                    className: x.resultAvatar,
                    size: i.EFr.SIZE_32,
                    status: l
                }),
                (0, r.jsxs)('div', {
                    className: x.resultText,
                    children: [
                        (0, r.jsx)('span', { children: c }),
                        (0, r.jsx)('span', {
                            className: x.resultUsername,
                            children: o
                        })
                    ]
                })
            ]
        });
    };
class T extends n.Component {
    render() {
        let e,
            t,
            { result: l, selected: n, sending: s } = this.props;
        switch (l.type) {
            case d.h8.GROUP_DM:
                e = (0, r.jsx)(b, { channel: l.data.record });
                break;
            case d.h8.TEXT_CHANNEL: {
                let { categoryName: t, guildName: n } = l;
                e = (0, r.jsx)(S, {
                    channel: l.data.record,
                    categoryName: t,
                    guildName: n
                });
                break;
            }
            case d.h8.USER: {
                let {
                    data: { comparator: t, record: n },
                    status: s
                } = l;
                e = (0, r.jsx)(j, {
                    comparator: t,
                    user: n,
                    status: s
                });
            }
        }
        return (
            (t = l.sent
                ? (0, r.jsx)(i.zxk, {
                      className: x.inviteButton,
                      look: i.zxk.Looks.LINK,
                      size: i.zxk.Sizes.SMALL,
                      disabled: !0,
                      color: i.zxk.Colors.WHITE,
                      children: v.NW.string(v.t.i6A1X1)
                  })
                : (0, r.jsx)(i.zxk, {
                      color: i.zxk.Colors.GREEN,
                      look: n ? i.zxk.Looks.FILLED : i.zxk.Looks.OUTLINED,
                      className: x.inviteButton,
                      size: i.zxk.Sizes.SMALL,
                      submitting: s,
                      onClick: this.handleClick,
                      children: v.NW.string(v.t['6F9ivr'])
                  })),
            (0, r.jsxs)(i.P3F, {
                className: a()(x.resultWrapper, { [x.resultWrapperSelected]: n }),
                onMouseEnter: this.handleMouseEnter,
                onClick: this.handleClick,
                children: [e, t]
            })
        );
    }
    constructor(...e) {
        super(...e),
            O(this, 'handleClick', () => {
                let { onInvite: e, row: t } = this.props;
                e(t);
            }),
            O(this, 'handleMouseEnter', () => {
                let { onMouseEnter: e, row: t } = this.props;
                e(t);
            });
    }
}
function A(e) {
    let { transitionState: t, onClose: l } = e,
        {
            results: s,
            query: a,
            activity: h
        } = (0, u.cj)(
            [m.Z],
            () => ({
                results: m.Z.getResults(),
                query: m.Z.getQuery(),
                activity: m.Z.getActivity()
            }),
            []
        ),
        [p, _] = n.useState(a),
        [N, g] = n.useState(0),
        [C, y] = n.useState([]),
        [O, S] = n.useState(!1),
        b = n.useRef(null),
        j = n.useCallback(() => {
            var e;
            null == (e = b.current) || e.scrollPageUp({ animate: !0 });
        }, [b]),
        A = n.useCallback(() => {
            var e;
            null == (e = b.current) || e.scrollPageDown({ animate: !0 });
        }, [b]);
    n.useEffect(
        () => (
            E.S.subscribe(f.CkL.SCROLL_PAGE_UP, j),
            () => {
                E.S.unsubscribe(f.CkL.SCROLL_PAGE_UP, j);
            }
        ),
        [j]
    ),
        n.useEffect(
            () => (
                E.S.subscribe(f.CkL.SCROLL_PAGE_DOWN, A),
                () => {
                    E.S.unsubscribe(f.CkL.SCROLL_PAGE_DOWN, A);
                }
            ),
            [A]
        ),
        n.useEffect(() => {
            null == h && l();
        }, [l, h]),
        n.useEffect(() => {
            var e;
            null == (e = b.current) || e.scrollToTop(), g(0);
        }, [b, s]);
    let P = n.useCallback(
            (e) => {
                let {
                    data: t,
                    data: {
                        record: { id: l }
                    }
                } = s[e];
                if (!(null == l || C.includes(l)))
                    switch ((y([...C, l]), t.type)) {
                        case d.h8.GROUP_DM:
                        case d.h8.TEXT_CHANNEL:
                            (0, c.GG)(t.record.id);
                            break;
                        case d.h8.USER:
                            (0, c.R2)(t.record.id);
                    }
            },
            [s, C]
        ),
        k = n.useCallback(
            (e) => {
                g(e);
            },
            [g]
        ),
        L = () => {
            R('');
        },
        R = (e) => {
            _(e), (0, c.rh)(e);
        };
    return null == h
        ? null
        : (0, r.jsxs)(i.Y0X, {
              transitionState: t,
              size: i.CgR.SMALL,
              'aria-label': v.NW.formatToPlainString(v.t['2tN7io'], { name: h.name }),
              children: [
                  (0, r.jsxs)(i.xBx, {
                      separator: O,
                      className: x.modalHeader,
                      children: [
                          (0, r.jsx)(i.olH, {
                              className: x.closeButton,
                              onClick: l
                          }),
                          (0, r.jsxs)('div', {
                              className: x.header,
                              children: [
                                  (0, r.jsx)(i.vwX, {
                                      tag: 'h2',
                                      className: I.marginBottom8,
                                      children: v.NW.format(v.t['2tN7io'], { name: h.name })
                                  }),
                                  (0, r.jsx)(o.ZP, {
                                      size: o.ZP.Sizes.MEDIUM,
                                      query: p,
                                      selectedSection: 0,
                                      selectedRow: N,
                                      sections: [s.length],
                                      className: I.marginTop4,
                                      onSelect: (e, t) => {
                                          null == t ? L() : P(t);
                                      },
                                      onSelectionChange: (e, t) => {
                                          var l;
                                          g(t),
                                              null == (l = b.current) ||
                                                  l.scrollIntoViewRect({
                                                      start: 48 * t,
                                                      end: 48 * t + 48
                                                  });
                                      },
                                      onQueryChange: R,
                                      placeholder: v.NW.string(v.t.IJExws),
                                      autoFocus: !0,
                                      onClear: L
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)(i.YAO, {
                      scrollerRef: b,
                      className: 0 === s.length ? x.noResults : x.results,
                      paddingBottom: 12,
                      sections: [s.length],
                      sectionHeight: 0,
                      renderSection: f.VqG,
                      rowHeight: (e, t) => (e > 0 ? 0 : 48 * (null != s[t])),
                      renderRow: (e) => {
                          let { section: t, row: l } = e;
                          if (t > 0) return null;
                          let n = s[l];
                          return null == n
                              ? null
                              : (0, r.jsx)(
                                    T,
                                    {
                                        row: l,
                                        result: n,
                                        sending: null != n.data.record.id && C.includes(n.data.record.id),
                                        selected: l === N,
                                        onMouseEnter: k,
                                        onInvite: P
                                    },
                                    n.data.record.id
                                );
                      },
                      onScroll: (e) => {
                          let t = e.currentTarget.scrollTop > 0;
                          O !== t && S(t);
                      }
                  })
              ]
          });
}
