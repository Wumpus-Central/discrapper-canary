n.d(t, { Z: () => c });
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(981631),
    o = n(973945);
class c extends r.Component {
    render() {
        let { className: e, videoID: t, videoClassName: n } = this.props;
        return (0, i.jsx)('div', {
            className: l()(e, o.videoWrapper),
            children: (0, i.jsx)('iframe', {
                className: l()(n, o.video),
                src: 'https://www.youtube.com/embed/'.concat(t, '?rel=0&showinfo=0&controls=1&origin=https://').concat(a.$R1),
                allowFullScreen: !0,
                sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
            })
        });
    }
}
