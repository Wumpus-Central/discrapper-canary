n.d(t, { Z: () => c });
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(981631),
    o = n(804653);
class c extends s.Component {
    render() {
        let { className: e, videoID: t, videoClassName: n } = this.props;
        return (0, i.jsx)('div', {
            className: r()(e, o.videoWrapper),
            children: (0, i.jsx)('iframe', {
                className: r()(n, o.video),
                src: 'https://www.youtube.com/embed/'.concat(t, '?rel=0&showinfo=0&controls=1&origin=https://').concat(a.$R1),
                allowFullScreen: !0,
                sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
            })
        });
    }
}
