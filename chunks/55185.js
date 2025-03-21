n.d(t, {
    zI: () => x,
    zu: () => C
});
var r = n(200651),
    i = n(192379),
    o = n(793030),
    l = n(442837),
    a = n(381499),
    s = n(481060),
    c = n(230711),
    u = n(100527),
    d = n(906732),
    p = n(695346),
    h = n(675478),
    f = n(885110);
n(63063);
var g = n(981631),
    m = n(107704),
    b = n(388032),
    v = n(649022),
    y = n(204794);
async function _(e) {
    await h.hW.updateAsync(
        'status',
        (t) => {
            (t.status = a.Gm.create({ value: e })), (t.statusExpiresAtMs = '0');
        },
        h.fy.INFREQUENT_USER_ACTION
    );
}
function O(e) {
    let { showCurrentGame: t, setActivityToggleDefaultState: n, setStatusDefaultState: i } = e,
        o = (0, l.e7)([f.Z], () => f.Z.getStatus());
    return (0, r.jsxs)('div', {
        className: v.toggleContainer,
        children: [
            (0, r.jsxs)('div', {
                className: v.toggleContainerText,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-primary',
                        children: b.NW.string(b.t.KY0ilp)
                    }),
                    null != i &&
                        (0, r.jsxs)('div', {
                            className: v.toggleContainerOnlineRow,
                            children: [
                                (0, r.jsx)(s.qbd, {
                                    status: s.Skl.ONLINE,
                                    size: 8
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-secondary',
                                    children: o === s.Skl.INVISIBLE ? b.NW.string(m.Z.a3AofX) : b.NW.string(b.t.WbGtnJ)
                                })
                            ]
                        })
                ]
            }),
            (0, r.jsx)(s.rsf, {
                onChange: (e) => {
                    p.G6.updateSetting(e), e && (n(e), null == i || i(e)), null != i && _(e ? s.Skl.ONLINE : s.Skl.INVISIBLE);
                },
                checked: t
            })
        ]
    });
}
function j(e) {
    let { children: t, closePopout: n } = e,
        l = (0, i.useRef)(null);
    return (
        (0, s.Tbt)(l),
        (0, r.jsxs)('div', {
            className: v.wrapper,
            ref: l,
            children: [
                null != n && (0, r.jsx)('div', { className: v.gradient }),
                (0, r.jsxs)('div', {
                    className: v.content,
                    children: [
                        null != n &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(s.zxk, {
                                        className: v.closeButton,
                                        'aria-label': b.NW.string(b.t.cpT0Cg),
                                        look: s.zxk.Looks.BLANK,
                                        size: s.zxk.Sizes.NONE,
                                        onClick: n,
                                        children: (0, r.jsx)(s.Dio, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        })
                                    }),
                                    (0, r.jsx)('img', {
                                        alt: '',
                                        src: y.Z,
                                        className: v.controllerImage
                                    }),
                                    (0, r.jsx)(o.X6, {
                                        variant: 'heading-md/bold',
                                        color: 'header-primary',
                                        className: v.nuxTitle,
                                        children: b.NW.string(b.t.PRjSRk)
                                    })
                                ]
                            }),
                        t
                    ]
                })
            ]
        })
    );
}
function C(e) {
    let { closePopout: t, setActivityToggleDefaultState: n } = e,
        { analyticsLocations: i } = (0, d.ZP)(u.Z.SHARING_CONTROLS_COACHMARK),
        o = p.G6.useSetting();
    return (0, r.jsxs)(j, {
        closePopout: t,
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: v.nuxContent,
                children: b.NW.format(b.t.nEgjjo, {
                    onClickSettings: () => {
                        t(), c.Z.open(g.oAB.ACTIVITY_PRIVACY, null, { analyticsLocations: i });
                    }
                })
            }),
            (0, r.jsx)('div', {
                className: v.toggleContainerWrapper,
                children: (0, r.jsx)(O, {
                    showCurrentGame: o,
                    setActivityToggleDefaultState: n
                })
            })
        ]
    });
}
function x(e) {
    let { closePopout: t, setActivityToggleDefaultState: n } = e,
        { analyticsLocations: i } = (0, d.ZP)(u.Z.SHARING_CONTROLS_COACHMARK),
        l = p.G6.useSetting();
    return (0, r.jsxs)(j, {
        children: [
            (0, r.jsx)(o.X6, {
                variant: 'heading-sm/semibold',
                color: 'header-primary',
                className: v.controlTitle,
                children: b.NW.string(b.t['6x5uWV'])
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: b.NW.format(b.t.nEgjjo, {
                    onClickSettings: () => {
                        t(), c.Z.open(g.oAB.ACTIVITY_PRIVACY, null, { analyticsLocations: i });
                    }
                })
            }),
            (0, r.jsx)('div', {
                className: v.toggleContainerWrapper,
                children: (0, r.jsx)(O, {
                    showCurrentGame: l,
                    setActivityToggleDefaultState: n
                })
            })
        ]
    });
}
