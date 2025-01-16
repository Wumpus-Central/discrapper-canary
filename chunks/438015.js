n(47120);
var i = n(200651),
    s = n(192379),
    r = n(13245),
    a = n(593481),
    o = n(692546),
    l = n(981631),
    d = n(606953);
function c(e, t, n) {
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
class u extends s.Component {
    getStyle() {
        let e, t, n, i;
        let {
            props: { position: s, zIndex: r }
        } = this;
        switch (s) {
            case l._vf.TOP_LEFT:
            case l._vf.BOTTOM_LEFT:
                e = 0;
                break;
            default:
                t = 0;
        }
        switch (s) {
            case l._vf.BOTTOM_LEFT:
            case l._vf.BOTTOM_RIGHT:
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
                    index: t,
                    notification: {
                        props: { renderFooter: n, onNotificationShow: s, onDismissClick: r, onNotificationClick: l, onConfirmClick: c, onCancelClick: u, ...h }
                    }
                }
            } = this,
            p = (0, i.jsx)('div', {
                className: d.notificationContainer,
                children: (0, i.jsx)(a.ZP, {
                    ...h,
                    onNotificationShow: 0 === t ? this.handleNotificationShow : null,
                    onDismissClick: this.handleDismissClick,
                    onNotificationClick: null != l ? this.handleNotificationClick : null,
                    onConfirmClick: null != c ? this.handleConfirmClick : null,
                    onCancelClick: null != u ? this.handleCancelClick : null,
                    renderFooter: this.renderFooter,
                    expand: !e && 0 === t,
                    disabled: 0 !== t
                })
            });
        return 0 === t
            ? (0, i.jsx)(o.Z, {
                  observeInterval: 200,
                  children: p
              })
            : p;
    }
    constructor(...e) {
        super(...e),
            c(this, 'handleNotificationShow', () => {
                let {
                    id: e,
                    props: { onNotificationShow: t }
                } = this.props.notification;
                t(e);
            }),
            c(this, 'handleDismissClick', (e) => {
                let {
                    id: t,
                    props: { onDismissClick: n }
                } = this.props.notification;
                r.Z.updateNotificationStatus(t), null != n && n(e, t);
            }),
            c(this, 'handleNotificationClick', (e) => {
                let {
                    id: t,
                    props: { onNotificationClick: n }
                } = this.props.notification;
                null != n && n(e, t);
            }),
            c(this, 'handleConfirmClick', (e) => {
                let {
                    id: t,
                    props: { onConfirmClick: n }
                } = this.props.notification;
                null != n && n(e, t);
            }),
            c(this, 'handleCancelClick', (e) => {
                let {
                    id: t,
                    props: { onCancelClick: n }
                } = this.props.notification;
                null != n && n(e, t);
            }),
            c(this, 'renderFooter', (e) => {
                let {
                    id: t,
                    props: { renderFooter: n }
                } = this.props.notification;
                return null != n ? n(e, t) : null;
            });
    }
}
t.Z = u;
