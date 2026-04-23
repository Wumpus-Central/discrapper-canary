"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(684013),
    a = n(471024),
    r = n(652215);
class o extends s.Component {
    handleNotificationShow = () => {
        let {
            id: e,
            props: { onNotificationShow: t },
        } = this.props.notification;
        t(e);
    };
    handleDismissClick = (e) => {
        let {
            id: t,
            props: { onDismissClick: n },
        } = this.props.notification;
        l.A.updateNotificationStatus(t), n?.(e, t);
    };
    handleNotificationClick = (e) => {
        let {
            id: t,
            props: { onNotificationClick: n },
        } = this.props.notification;
        null != n && n(e, t);
    };
    handleConfirmClick = (e) => {
        let {
            id: t,
            props: { onConfirmClick: n },
        } = this.props.notification;
        null != n && n(e, t);
    };
    handleCancelClick = (e) => {
        let {
            id: t,
            props: { onCancelClick: n },
        } = this.props.notification;
        null != n && n(e, t);
    };
    renderFooter = (e) => {
        let {
                id: t,
                props: { renderFooter: n },
            } = this.props.notification,
            i = this.props.locked;
        return null != n ? n(e, t, i) : null;
    };
    getStyle() {
        let e,
            t,
            n,
            i,
            {
                props: { position: s, zIndex: l },
            } = this;
        switch (s) {
            case r.G6Q.TOP_LEFT:
            case r.G6Q.BOTTOM_LEFT:
                e = 0;
                break;
            default:
                t = 0;
        }
        switch (s) {
            case r.G6Q.BOTTOM_LEFT:
            case r.G6Q.BOTTOM_RIGHT:
                n = 0;
                break;
            default:
                i = 0;
        }
        return { left: e, right: t, bottom: n, top: i, zIndex: l };
    }
    render() {
        let {
            props: {
                locked: e,
                notification: {
                    props: {
                        renderFooter: t,
                        onNotificationShow: n,
                        onDismissClick: s,
                        onNotificationClick: l,
                        onConfirmClick: r,
                        onCancelClick: o,
                        ...d
                    },
                },
            },
        } = this;
        return (0, i.jsx)(a.Ay, {
            ...d,
            locked: e,
            onNotificationShow: this.handleNotificationShow,
            onDismissClick: null != s ? this.handleDismissClick : void 0,
            onNotificationClick: null != l ? this.handleNotificationClick : null,
            onConfirmClick: null != r ? this.handleConfirmClick : null,
            onCancelClick: null != o ? this.handleCancelClick : null,
            renderFooter: this.renderFooter,
            expand: !e,
        });
    }
}
let d = o;
