(n.d(t, { Z: () => f }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749));
var i = n(255367),
    r = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(544891),
    o = n(70097),
    C = n(585483),
    d = n(981631),
    c = n(794503),
    u = n(279421),
    p = n(410401),
    x = n(701262);
let h = async (e) => {
        let [t, n, i] = await Promise.all([
            a.tn.get({
                url: u.Z,
                binary: !0,
                rejectWithError: !0
            }),
            a.tn.get({
                url: p.Z,
                binary: !0,
                rejectWithError: !0
            }),
            a.tn.get({
                url: x.Z,
                binary: !0,
                rejectWithError: !0
            })
        ]);
        e({
            modalGlowEntry: window.URL.createObjectURL(t.body),
            modalGlowExit: window.URL.createObjectURL(n.body),
            modalGlowIdle: window.URL.createObjectURL(i.body)
        });
    },
    f = (e) => {
        let { children: t, visible: n, shouldPrefetchWowMoment: l } = e,
            [a, u] = (0, r.useState)({
                modalGlowEntry: void 0,
                modalGlowIdle: void 0,
                modalGlowExit: void 0
            }),
            [p, x] = (0, r.useState)('entry'),
            f = (0, r.useRef)(null),
            j = (0, r.useRef)(null),
            m = () => {
                (x('exit'), null != j.current && j.current.play());
            },
            _ = (0, r.useRef)(!0);
        return ((0, r.useEffect)(
            () => (
                (_.current = !0),
                () => {
                    _.current = !1;
                }
            ),
            []
        ),
        (0, r.useEffect)(
            () => () => {
                (null != a.modalGlowEntry && window.URL.revokeObjectURL(a.modalGlowEntry), null != a.modalGlowIdle && window.URL.revokeObjectURL(a.modalGlowIdle), null != a.modalGlowExit && window.URL.revokeObjectURL(a.modalGlowExit));
            },
            [a.modalGlowEntry, a.modalGlowIdle, a.modalGlowExit]
        ),
        (0, r.useEffect)(() => {
            l &&
                h((e) => {
                    _.current && u(e);
                });
        }, [l]),
        (0, r.useEffect)(() => {
            function e() {
                m();
            }
            return (
                C.S.subscribe(d.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e),
                () => {
                    C.S.unsubscribe(d.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e);
                }
            );
        }, []),
        n)
            ? (0, i.jsxs)('div', {
                  children: [
                      (0, i.jsxs)('div', {
                          className: c.videoContainer,
                          children: [
                              (0, i.jsx)('div', {
                                  className: c.entryAnimationContainer,
                                  children: (0, i.jsx)(o.Z, {
                                      playsInline: !0,
                                      muted: !0,
                                      autoPlay: !0,
                                      onEnded: () => {
                                          (x('idle'), null != f.current && f.current.play());
                                      },
                                      className: s()(c.video, 'entry' === p ? c.visible : c.hidden),
                                      children: (0, i.jsx)('source', { src: a.modalGlowEntry })
                                  })
                              }),
                              (0, i.jsx)(o.Z, {
                                  ref: f,
                                  playsInline: !0,
                                  muted: !0,
                                  loop: !0,
                                  className: s()(c.video, 'idle' === p ? c.visible : c.hidden),
                                  children: (0, i.jsx)('source', { src: a.modalGlowIdle })
                              }),
                              (0, i.jsx)(o.Z, {
                                  ref: j,
                                  playsInline: !0,
                                  muted: !0,
                                  className: s()(c.video, 'exit' === p ? c.visible : c.hidden),
                                  children: (0, i.jsx)('source', { src: a.modalGlowExit })
                              })
                          ]
                      }),
                      (0, i.jsx)('div', {
                          className: c.entryAnimationContainer,
                          children: t
                      })
                  ]
              })
            : t;
    };
