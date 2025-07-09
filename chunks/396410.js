(n.d(t, { default: () => x }), n(413496), n(433524), n(35282), n(388685));
var l = n(255367),
    s = n(73800),
    i = n(990547),
    r = n(755721),
    a = n(481060),
    o = n(479531),
    u = n(213609),
    c = n(388032),
    d = n(675833);
let h = RegExp('(^[-!#$%&\'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&\'*+/=?^_`{}|~0-9A-Z]+)*|^"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-011\\013\\014\\016-\\177])*")@(?:[A-Z0-9](?:[A-Z0-9-]{0,2000}[A-Z0-9])?\\.)+[A-Z]{2,63}\\.?$', 'i');
function x(e) {
    let { transitionState: t, onFormSubmit: n, onSuccess: x, onClose: p, headerText: m, confirmButtonText: j, confirmButtonColor: f, impressionName: g } = e,
        [C, _] = s.useState(!1),
        [z, A] = s.useState(''),
        [k, v] = s.useState(null),
        y = s.useRef(null);
    (0, u.Z)({
        type: i.ImpressionTypes.MODAL,
        name: g
    });
    let E = async (e) => {
        if ((e.preventDefault(), v(null), _(!0), !1 === h.test(z))) {
            (v(c.intl.string(c.t.hML7Gx)), _(!1));
            return;
        }
        try {
            let e = null != n ? await n(z) : void 0;
            (null != x &&
                (null != e
                    ? x({
                          response: e,
                          email: z
                      })
                    : x(z)),
                p());
        } catch (e) {
            v(new o.Z(e).getAnyErrorMessage());
        } finally {
            _(!1);
        }
    };
    return (0, l.jsx)(a.Y0X, {
        transitionState: t,
        parentComponent: 'EmailEnterModal',
        children: (0, l.jsxs)('form', {
            onSubmit: E,
            children: [
                (0, l.jsxs)(a.xBx, {
                    separator: !1,
                    className: d.header,
                    children: [
                        (0, l.jsx)(a.X6q, {
                            variant: 'heading-lg/semibold',
                            className: d.title,
                            children: m
                        }),
                        (0, l.jsx)(a.olH, {
                            onClick: p,
                            className: d.modalCloseButton
                        })
                    ]
                }),
                (0, l.jsx)(a.hzk, {
                    children: (0, l.jsx)(a.xJW, {
                        title: c.intl.string(c.t.hvOfmJ),
                        error: k,
                        children: (0, l.jsx)(a.oil, {
                            value: z,
                            onChange: A,
                            inputRef: y
                        })
                    })
                }),
                (0, l.jsx)(a.mzw, {
                    children: (0, l.jsxs)(a.hE2, {
                        direction: 'horizontal-reverse',
                        children: [
                            (0, l.jsx)(r.zx, {
                                type: 'submit',
                                color: null != f ? f : r.zx.Colors.BRAND,
                                size: r.zx.Sizes.MEDIUM,
                                submitting: C,
                                children: j
                            }),
                            (0, l.jsx)(a.zxk, {
                                variant: 'secondary',
                                text: c.intl.string(c.t['ETE/oK']),
                                onClick: p
                            })
                        ]
                    })
                })
            ]
        })
    });
}
