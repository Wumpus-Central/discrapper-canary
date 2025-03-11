n.d(t, {
    c: () => s,
    default: () => c
});
var r = n(200651);
n(192379);
var a = n(466377),
    i = n(481060),
    l = n(281598),
    o = n(454510);
let s = 'shop-assets-preview-instructions-modal',
    c = (e) => {
        let { transitionState: t } = e;
        return (0, r.jsxs)(a.Y0, {
            size: a.Cg.DYNAMIC,
            transitionState: t,
            children: [
                (0, r.jsx)(a.xB, {
                    className: o.modalHeader,
                    children: (0, r.jsx)(i.X6q, {
                        variant: 'heading-xl/bold',
                        children: 'Upload Instructions'
                    })
                }),
                (0, r.jsxs)(a.hz, {
                    className: o.modalContent,
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: 'text-md/bold',
                            children: 'Upload Shop assets for preview in the app!'
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            children: 'Toggle "Enable Preview" to switch between viewing the live and preview assets.'
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            children: 'These are only visible to you. Reloading the app will reset the state.'
                        }),
                        (0, r.jsx)(i.LZC, { size: 4 }),
                        (0, r.jsx)(i.X6q, {
                            variant: 'heading-md/bold',
                            children: 'Valid Upload Types'
                        }),
                        (0, r.jsxs)('ul', {
                            className: o.instructionsList,
                            children: [(0, r.jsx)('li', { children: 'One or more image or video files (jpg, png, webm)' }), (0, r.jsx)('li', { children: 'A folder containing image or video files' })]
                        }),
                        (0, r.jsx)(i.X6q, {
                            variant: 'heading-md/bold',
                            children: 'Valid File Names'
                        }),
                        (0, r.jsx)('ul', {
                            className: o.instructionsList,
                            children: Object.keys(l.Kj).map((e) => (0, r.jsx)('li', { children: e }, e))
                        })
                    ]
                }),
                (0, r.jsx)(a.mz, {})
            ]
        });
    };
