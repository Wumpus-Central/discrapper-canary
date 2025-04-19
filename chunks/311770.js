s.d(e, { EmojiStudioModal: () => r });
var o = s(200651);
s(192379);
var a = s(481060),
    l = s(375727),
    n = s(388032),
    d = s(807179);
let i = (t) => {
        let { userImage: e } = t;
        return (0, o.jsxs)('main', {
            children: [
                (0, o.jsx)('div', {
                    className: d.left,
                    children: (0, o.jsx)('img', {
                        src: e.data,
                        alt: 'Uploaded content'
                    })
                }),
                (0, o.jsxs)('div', {
                    className: d.right,
                    children: [
                        (0, o.jsx)(a.X6q, {
                            variant: 'heading-lg/bold',
                            children: n.NW.string(n.t.DU0dy8)
                        }),
                        (0, o.jsx)(a.olH, {
                            onClick: l.y,
                            className: d.closeButton
                        })
                    ]
                })
            ]
        });
    },
    r = (t) => {
        let { transitionState: e, userImage: s } = t;
        return (0, o.jsx)(a.Y0X, {
            transitionState: e,
            size: a.CgR.LARGE,
            className: d.modalRoot,
            children: (0, o.jsx)(a.hzk, {
                scrollbarType: 'none',
                className: d.modalContent,
                children: (0, o.jsx)(i, { userImage: s })
            })
        });
    };
