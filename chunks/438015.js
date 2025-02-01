n.d(t, { Z: () => c }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(13245),
    r = n(593481),
    o = n(981631);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class d extends s.Component {
    getStyle() {
        let e, t, n, i;
        let {
            props: { position: s, zIndex: l }
        } = this;
        switch (s) {
            case o._vf.TOP_LEFT:
            case o._vf.BOTTOM_LEFT:
                e = 0;
                break;
            default:
                t = 0;
        }
        switch (s) {
            case o._vf.BOTTOM_LEFT:
            case o._vf.BOTTOM_RIGHT:
                n = 0;
                break;
            default:
                i = 0;
        }
        return {
            left: e,
            right: t,
            bottom: n,
            top: i,
            zIndex: l
        };
    }
    render() {
        let {
            props: {
                locked: e,
                notification: {
                    props: { renderFooter: t, onNotificationShow: n, onDismissClick: s, onNotificationClick: l, onConfirmClick: o, onCancelClick: a, ...d }
                }
            }
        } = this;
        return (0, i.jsx)(r.ZP, {
            ...d,
            onNotificationShow: this.handleNotificationShow,
            onDismissClick: null != s ? this.handleDismissClick : void 0,
            onNotificationClick: null != l ? this.handleNotificationClick : null,
            onConfirmClick: null != o ? this.handleConfirmClick : null,
            onCancelClick: null != a ? this.handleCancelClick : null,
            renderFooter: this.renderFooter,
            expand: !e
        });
    }
    constructor(...e) {
        super(...e),
            a(this, 'handleNotificationShow', () => {
                let {
                    id: e,
                    props: { onNotificationShow: t }
                } = this.props.notification;
                t(e);
            }),
            a(this, 'handleDismissClick', (e) => {
                let {
                    id: t,
                    props: { onDismissClick: n }
                } = this.props.notification;
                l.Z.updateNotificationStatus(t), null == n || n(e, t);
            }),
            a(this, 'handleNotificationClick', (e) => {
                let {
                    id: t,
                    props: { onNotificationClick: n }
                } = this.props.notification;
                null != n && n(e, t);
            }),
            a(this, 'handleConfirmClick', (e) => {
                let {
                    id: t,
                    props: { onConfirmClick: n }
                } = this.props.notification;
                null != n && n(e, t);
            }),
            a(this, 'handleCancelClick', (e) => {
                let {
                    id: t,
                    props: { onCancelClick: n }
                } = this.props.notification;
                null != n && n(e, t);
            }),
            a(this, 'renderFooter', (e) => {
                let {
                    id: t,
                    props: { renderFooter: n }
                } = this.props.notification;
                return null != n ? n(e, t) : null;
            });
    }
}
let c = d;
