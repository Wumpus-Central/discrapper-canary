var i = r(192379);
let a = (e) => {
        e.effects.forEach((e) => {
            let { src: n } = e,
                r = document.createElement('link');
            (r.rel = 'prefetch'),
                (r.href = n),
                (r.onload = () => {
                    document.body.removeChild(r);
                }),
                document.body.appendChild(r);
        });
    },
    o = (e) => {
        i.useEffect(() => {
            if ('loading' === document.readyState) {
                let n = () => {
                    a(e);
                };
                return (
                    document.addEventListener('DOMContentLoaded', n),
                    () => {
                        document.removeEventListener('DOMContentLoaded', n);
                    }
                );
            }
            a(e);
        }, [e]);
    };
n.Z = o;
