n.d(t, {
    ShopAssetsPreviewInstructionModal: () => d,
    ShopPFXPreviewInstructionModal: () => u,
    c: () => c,
    g: () => o
});
var a = n(200651);
n(192379);
var r = n(466377),
    l = n(481060),
    i = n(281598),
    s = n(152906);
let o = 'shop-assets-preview-instructions-modal',
    c = 'shop-pfx-preview-instructions-modal',
    d = (e) => {
        let { transitionState: t } = e;
        return (0, a.jsxs)(r.Y0, {
            size: r.Cg.DYNAMIC,
            transitionState: t,
            className: s.modalRoot,
            children: [
                (0, a.jsx)(r.xB, {
                    className: s.modalHeader,
                    children: (0, a.jsx)(l.X6q, {
                        variant: 'heading-xl/bold',
                        children: 'Upload Instructions'
                    })
                }),
                (0, a.jsxs)(r.hz, {
                    className: s.modalContent,
                    children: [
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/bold',
                            children: 'Upload Shop assets for preview in the app!'
                        }),
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'Toggle "Enable Preview" to switch between viewing the live and preview assets.'
                        }),
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'These are only visible to you. Reloading the app will reset the state.'
                        }),
                        (0, a.jsx)(l.LZC, { size: 4 }),
                        (0, a.jsx)(l.X6q, {
                            variant: 'heading-md/bold',
                            children: 'Valid Upload Types'
                        }),
                        (0, a.jsxs)('ul', {
                            className: s.instructionsList,
                            children: [(0, a.jsx)('li', { children: 'One or more image or video files (jpg, png, webm)' }), (0, a.jsx)('li', { children: 'A folder containing image or video files' })]
                        }),
                        (0, a.jsx)(l.X6q, {
                            variant: 'heading-md/bold',
                            children: 'Valid File Names'
                        }),
                        (0, a.jsx)('ul', {
                            className: s.instructionsList,
                            children: Object.keys(i.Kj).map((e) => (0, a.jsx)('li', { children: e }, e))
                        })
                    ]
                }),
                (0, a.jsx)(r.mz, {})
            ]
        });
    },
    u = (e) => {
        let { transitionState: t } = e;
        return (0, a.jsxs)(r.Y0, {
            size: r.Cg.DYNAMIC,
            transitionState: t,
            className: s.modalRoot,
            children: [
                (0, a.jsx)(r.xB, {
                    className: s.modalHeader,
                    children: (0, a.jsx)(l.X6q, {
                        variant: 'heading-xl/bold',
                        children: 'PFX Preview Instructions'
                    })
                }),
                (0, a.jsxs)(r.hz, {
                    className: s.modalContent,
                    children: [
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: '1. Draft your PFX in the PFX Editor (in User Settings)'
                        }),
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: '2. In this devtools dropdown, select one of your PFX drafts'
                        }),
                        (0, a.jsx)(l.LZC, { size: 8 }),
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'The selected PFX should now be visible everywhere that already has a PFX, such as Shop cards, Shop PDPs, and user profiles (with PFX applied).'
                        }),
                        (0, a.jsx)(l.LZC, { size: 8 }),
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'Toggle "Enable Preview" to switch between viewing the live and preview PFX.'
                        })
                    ]
                }),
                (0, a.jsx)(r.mz, {})
            ]
        });
    };
