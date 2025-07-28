e.d(n, { default: () => k });
var i = e(255367),
    s = e(73800),
    a = e(120356),
    o = e.n(a),
    c = e(82659),
    r = e(481060),
    l = e(454585),
    d = e(585483),
    u = e(981631),
    p = e(388032),
    h = e(44534),
    C = e(73433);
function k(t) {
    let { channel: n, isFromComposer: e, transitionState: a, onClose: k } = t;
    return (
        s.useEffect(
            () => () => {
                e && d.S.dispatch(u.CkL.FOCUS_COMPOSER_TITLE);
            },
            [e]
        ),
        (0, i.jsx)(c.Modal, {
            transitionState: a,
            onClose: k,
            title: p.intl.string(p.t['4d4T4u']),
            actions: [
                {
                    text: p.intl.string(p.t['NX+WJC']),
                    onClick: k
                }
            ],
            children: (0, i.jsx)(r.Text, {
                className: o()(h.content, C.markup),
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: (0, i.jsx)('div', {
                    children: l.Z.parseForumPostGuidelines(n.topic, !0, {
                        channelId: n.id,
                        allowHeading: !0,
                        allowList: !0
                    })
                })
            })
        })
    );
}
