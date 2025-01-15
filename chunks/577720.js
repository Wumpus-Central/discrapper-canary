n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(981631),
    o = n(831968);
class c extends s.Component {
    render() {
        let { className: e, videoID: t, videoClassName: n } = this.props;
        return (0, i.jsx)('div', {
            className: a()(e, o.videoWrapper),
            children: (0, i.jsx)('iframe', {
                className: a()(n, o.video),
                src: 'https://www.youtube.com/embed/'.concat(t, '?rel=0&showinfo=0&controls=1&origin=https://').concat(l.$R1),
                allowFullScreen: !0,
                sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
            })
        });
    }
}
