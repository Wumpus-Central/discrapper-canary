(l.d(t, { default: () => h }), l(413496), l(433524), l(35282), l(388685));
var n = l(255367),
    s = l(73800),
    i = l(990547),
    o = l(481060),
    r = l(479531),
    a = l(213609),
    u = l(388032),
    c = l(675833);
let d = RegExp('(^[-!#$%&\'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&\'*+/=?^_`{}|~0-9A-Z]+)*|^"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-011\\013\\014\\016-\\177])*")@(?:[A-Z0-9](?:[A-Z0-9-]{0,2000}[A-Z0-9])?\\.)+[A-Z]{2,63}\\.?$', 'i');
function h(e) {
    let { transitionState: t, onFormSubmit: l, onSuccess: h, onClose: x, headerText: p, confirmButtonText: m, confirmButtonColor: k, impressionName: f } = e,
        [j, C] = s.useState(!1),
        [g, z] = s.useState(''),
        [A, _] = s.useState(null),
        Z = s.useRef(null);
    (0, a.Z)({
        type: i.ImpressionTypes.MODAL,
        name: f
    });
    let y = async (e) => {
        if ((e.preventDefault(), _(null), C(!0), !1 === d.test(g))) {
            (_(u.intl.string(u.t.hML7Gx)), C(!1));
            return;
        }
        try {
            let e = null != l ? await l(g) : void 0;
            (null != h &&
                (null != e
                    ? h({
                          response: e,
                          email: g
                      })
                    : h(g)),
                x());
        } catch (e) {
            _(new r.Z(e).getAnyErrorMessage());
        } finally {
            C(!1);
        }
    };
    return (0, n.jsx)(o.Y0X, {
        transitionState: t,
        parentComponent: 'EmailEnterModal',
        children: (0, n.jsxs)('form', {
            onSubmit: y,
            children: [
                (0, n.jsxs)(o.xBx, {
                    separator: !1,
                    className: c.header,
                    children: [
                        (0, n.jsx)(o.X6q, {
                            variant: 'heading-lg/semibold',
                            className: c.title,
                            children: p
                        }),
                        (0, n.jsx)(o.olH, {
                            onClick: x,
                            className: c.modalCloseButton
                        })
                    ]
                }),
                (0, n.jsx)(o.hzk, {
                    children: (0, n.jsx)(o.xJW, {
                        title: u.intl.string(u.t.hvOfmJ),
                        error: A,
                        children: (0, n.jsx)(o.oil, {
                            value: g,
                            onChange: z,
                            inputRef: Z
                        })
                    })
                }),
                (0, n.jsxs)(o.mzw, {
                    children: [
                        (0, n.jsx)(o.zxk, {
                            type: 'submit',
                            color: null != k ? k : o.zxk.Colors.BRAND,
                            size: o.zxk.Sizes.MEDIUM,
                            submitting: j,
                            children: m
                        }),
                        (0, n.jsx)(o.zxk, {
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            onClick: x,
                            children: u.intl.string(u.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
