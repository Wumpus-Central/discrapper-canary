n.d(t, { Z: () => c });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(981631),
    o = n(973945);
class c extends i.Component {
    render() {
        let { className: e, videoID: t, videoClassName: n } = this.props;
        return (0, r.jsx)('div', {
            className: a()(e, o.videoWrapper),
            children: (0, r.jsx)('iframe', {
                className: a()(n, o.video),
                src: 'https://www.youtube.com/embed/'.concat(t, '?rel=0&showinfo=0&controls=1&origin=https://').concat(l.$R1),
                allowFullScreen: !0,
                sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
            })
        });
    }
}
