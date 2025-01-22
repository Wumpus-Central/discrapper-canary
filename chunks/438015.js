n(47120);
var i = n(200651),
    s = n(192379),
    r = n(13245),
    o = n(593481),
    a = n(981631);
function l(e, t, n) {
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
class c extends s.Component {
    getStyle() {
        let e, t, n, i;
        let {
            props: { position: s, zIndex: r }
        } = this;
        switch (s) {
            case a._vf.TOP_LEFT:
            case a._vf.BOTTOM_LEFT:
                e = 0;
                break;
            default:
                t = 0;
        }
        switch (s) {
            case a._vf.BOTTOM_LEFT:
            case a._vf.BOTTOM_RIGHT:
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
            zIndex: r
        };
    }
    render() {
        let {
            props: {
                locked: e,
                notification: {
                    props: { renderFooter: t, onNotificationShow: n, onDismissClick: s, onNotificationClick: r, onConfirmClick: a, onCancelClick: l, ...c }
                }
            }
        } = this;
        return (0, i.jsx)(o.ZP, {
            ...c,
            onNotificationShow: this.handleNotificationShow,
            onDismissClick: null != s ? this.handleDismissClick : void 0,
            onNotificationClick: null != r ? this.handleNotificationClick : null,
            onConfirmClick: null != a ? this.handleConfirmClick : null,
            onCancelClick: null != l ? this.handleCancelClick : null,
            renderFooter: this.renderFooter,
            expand: !e
        });
    }
    constructor(...e) {
        super(...e),
            l(this, 'handleNotificationShow', () => {
                let {
                    id: e,
                    props: { onNotificationShow: t }
                } = this.props.notification;
                t(e);
            }),
            l(this, 'handleDismissClick', (e) => {
                let {
                    id: t,
                    props: { onDismissClick: n }
                } = this.props.notification;
                r.Z.updateNotificationStatus(t), null == n || n(e, t);
            }),
            l(this, 'handleNotificationClick', (e) => {
                let {
                    id: t,
                    props: { onNotificationClick: n }
                } = this.props.notification;
                null != n && n(e, t);
            }),
            l(this, 'handleConfirmClick', (e) => {
                let {
                    id: t,
                    props: { onConfirmClick: n }
                } = this.props.notification;
                null != n && n(e, t);
            }),
            l(this, 'handleCancelClick', (e) => {
                let {
                    id: t,
                    props: { onCancelClick: n }
                } = this.props.notification;
                null != n && n(e, t);
            }),
            l(this, 'renderFooter', (e) => {
                let {
                    id: t,
                    props: { renderFooter: n }
                } = this.props.notification;
                return null != n ? n(e, t) : null;
            });
    }
}
t.Z = c;
